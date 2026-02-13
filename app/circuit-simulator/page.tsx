'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

// Component Types
type ComponentType = 
  | 'transformer' 
  | 'relay-spst' 
  | 'relay-spdt' 
  | 'relay-dpdt'
  | 'switch-toggle' 
  | 'switch-pressure' 
  | 'switch-thermostat'
  | 'lamp'
  | 'fan'
  | 'fuse'
  | 'wire';

interface Position {
  x: number;
  y: number;
}

interface Terminal {
  id: string;
  label: string;
  position: Position; // Relative to component
  type: 'power' | 'load' | 'control' | 'common' | 'nc' | 'no';
}

interface Connection {
  id: string;
  fromComponent: string;
  fromTerminal: string;
  toComponent: string;
  toTerminal: string;
}

interface CircuitComponent {
  id: string;
  type: ComponentType;
  position: Position;
  state: 'open' | 'closed' | 'on' | 'off' | 'blown';
  energized: boolean;
  label: string;
  terminals: Terminal[];
}

// Component definitions with terminals
const COMPONENT_DEFINITIONS: Record<ComponentType, { 
  label: string; 
  description: string; 
  width: number; 
  height: number;
  terminals: Omit<Terminal, 'id'>[];
  defaultState: CircuitComponent['state'];
}> = {
  'transformer': {
    label: '24V Transformer',
    description: 'Provides 24VAC power to the control circuit',
    width: 80,
    height: 60,
    terminals: [
      { label: 'R', position: { x: 0, y: 30 }, type: 'power' },
      { label: 'C', position: { x: 80, y: 30 }, type: 'common' },
    ],
    defaultState: 'on',
  },
  'relay-spst': {
    label: 'SPST Relay',
    description: 'Single Pole Single Throw - Basic on/off relay',
    width: 70,
    height: 80,
    terminals: [
      { label: 'Coil+', position: { x: 0, y: 20 }, type: 'control' },
      { label: 'Coil-', position: { x: 0, y: 60 }, type: 'control' },
      { label: 'COM', position: { x: 70, y: 30 }, type: 'common' },
      { label: 'NO', position: { x: 70, y: 50 }, type: 'no' },
    ],
    defaultState: 'open',
  },
  'relay-spdt': {
    label: 'SPDT Relay',
    description: 'Single Pole Double Throw - Switchover relay',
    width: 70,
    height: 90,
    terminals: [
      { label: 'Coil+', position: { x: 0, y: 20 }, type: 'control' },
      { label: 'Coil-', position: { x: 0, y: 70 }, type: 'control' },
      { label: 'COM', position: { x: 70, y: 45 }, type: 'common' },
      { label: 'NC', position: { x: 70, y: 25 }, type: 'nc' },
      { label: 'NO', position: { x: 70, y: 65 }, type: 'no' },
    ],
    defaultState: 'open',
  },
  'relay-dpdt': {
    label: 'DPDT Relay',
    description: 'Double Pole Double Throw - Two circuits, switchover',
    width: 80,
    height: 100,
    terminals: [
      { label: 'Coil+', position: { x: 0, y: 20 }, type: 'control' },
      { label: 'Coil-', position: { x: 0, y: 80 }, type: 'control' },
      { label: 'COM1', position: { x: 80, y: 30 }, type: 'common' },
      { label: 'NC1', position: { x: 80, y: 15 }, type: 'nc' },
      { label: 'NO1', position: { x: 80, y: 45 }, type: 'no' },
      { label: 'COM2', position: { x: 80, y: 70 }, type: 'common' },
      { label: 'NC2', position: { x: 80, y: 55 }, type: 'nc' },
      { label: 'NO2', position: { x: 80, y: 85 }, type: 'no' },
    ],
    defaultState: 'open',
  },
  'switch-toggle': {
    label: 'Toggle Switch',
    description: 'Manual on/off switch',
    width: 60,
    height: 40,
    terminals: [
      { label: 'IN', position: { x: 0, y: 20 }, type: 'power' },
      { label: 'OUT', position: { x: 60, y: 20 }, type: 'load' },
    ],
    defaultState: 'open',
  },
  'switch-pressure': {
    label: 'Pressure Switch',
    description: 'Opens/closes based on pressure (click to simulate)',
    width: 60,
    height: 50,
    terminals: [
      { label: 'IN', position: { x: 0, y: 25 }, type: 'power' },
      { label: 'OUT', position: { x: 60, y: 25 }, type: 'load' },
    ],
    defaultState: 'open',
  },
  'switch-thermostat': {
    label: 'Thermostat',
    description: 'Temperature-controlled switch (click to simulate call)',
    width: 70,
    height: 50,
    terminals: [
      { label: 'R', position: { x: 0, y: 25 }, type: 'power' },
      { label: 'W', position: { x: 70, y: 25 }, type: 'load' },
    ],
    defaultState: 'open',
  },
  'lamp': {
    label: 'Indicator Lamp',
    description: 'Lights up when energized',
    width: 50,
    height: 50,
    terminals: [
      { label: '+', position: { x: 0, y: 25 }, type: 'power' },
      { label: '-', position: { x: 50, y: 25 }, type: 'load' },
    ],
    defaultState: 'off',
  },
  'fan': {
    label: 'Fan Motor',
    description: 'Spins when energized',
    width: 60,
    height: 60,
    terminals: [
      { label: 'L', position: { x: 0, y: 30 }, type: 'power' },
      { label: 'N', position: { x: 60, y: 30 }, type: 'load' },
    ],
    defaultState: 'off',
  },
  'fuse': {
    label: 'Fuse',
    description: 'Protects circuit - blows on overload',
    width: 50,
    height: 30,
    terminals: [
      { label: 'IN', position: { x: 0, y: 15 }, type: 'power' },
      { label: 'OUT', position: { x: 50, y: 15 }, type: 'load' },
    ],
    defaultState: 'closed',
  },
  'wire': {
    label: 'Wire',
    description: 'Connect components',
    width: 20,
    height: 20,
    terminals: [],
    defaultState: 'closed',
  },
};

// Palette Component
function ComponentPalette({ onDragStart }: { onDragStart: (type: ComponentType) => void }) {
  const components: ComponentType[] = [
    'transformer',
    'relay-spst',
    'relay-spdt', 
    'relay-dpdt',
    'switch-toggle',
    'switch-pressure',
    'switch-thermostat',
    'lamp',
    'fan',
    'fuse',
  ];

  return (
    <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-4">
      <h3 className="text-lg font-semibold text-brand-text-primary mb-4">Components</h3>
      <div className="grid grid-cols-2 gap-2">
        {components.map((type) => {
          const def = COMPONENT_DEFINITIONS[type];
          return (
            <div
              key={type}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('componentType', type);
                onDragStart(type);
              }}
              onTouchStart={() => onDragStart(type)}
              className="bg-brand-bg-tertiary border border-brand-border rounded-lg p-3 cursor-grab active:cursor-grabbing hover:border-brand-accent-orange transition touch-manipulation select-none"
            >
              <div className="flex items-center gap-2 mb-1">
                <ComponentIcon type={type} size={24} />
                <span className="text-sm font-medium text-brand-text-primary truncate">
                  {def.label}
                </span>
              </div>
              <p className="text-xs text-brand-text-tertiary line-clamp-2">
                {def.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Component Icon SVGs
function ComponentIcon({ type, size = 40, energized = false, state = 'off' }: { 
  type: ComponentType; 
  size?: number;
  energized?: boolean;
  state?: CircuitComponent['state'];
}) {
  const color = energized ? '#FF8500' : '#6C757D';
  const glowColor = energized ? 'rgba(255, 133, 0, 0.5)' : 'transparent';
  
  switch (type) {
    case 'transformer':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <rect x="5" y="8" width="30" height="24" fill="none" stroke={color} strokeWidth="2" rx="2" />
          <path d="M12 12 L12 28 M16 12 L16 28" stroke={color} strokeWidth="2" />
          <path d="M24 12 L24 28 M28 12 L28 28" stroke={color} strokeWidth="2" />
          <text x="20" y="35" textAnchor="middle" fill={color} fontSize="8">24V</text>
        </svg>
      );
    case 'relay-spst':
    case 'relay-spdt':
    case 'relay-dpdt':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <rect x="5" y="5" width="30" height="30" fill="none" stroke={color} strokeWidth="2" rx="2" />
          <circle cx="15" cy="20" r="6" fill="none" stroke={color} strokeWidth="2" />
          {energized && (
            <circle cx="15" cy="20" r="4" fill={color}>
              <animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite" />
            </circle>
          )}
          <path d={state === 'closed' ? "M24 15 L32 25" : "M24 25 L32 15"} stroke={color} strokeWidth="2" />
          <circle cx="24" cy={state === 'closed' ? 15 : 25} r="2" fill={color} />
          <circle cx="32" cy={state === 'closed' ? 25 : 15} r="2" fill={color} />
        </svg>
      );
    case 'switch-toggle':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <circle cx="8" cy="20" r="4" fill={color} />
          <circle cx="32" cy="20" r="4" fill={color} />
          <path d={state === 'closed' ? "M12 20 L28 20" : "M12 20 L28 12"} stroke={color} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'switch-pressure':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <circle cx="8" cy="20" r="4" fill={color} />
          <circle cx="32" cy="20" r="4" fill={color} />
          <path d={state === 'closed' ? "M12 20 L28 20" : "M12 20 L28 12"} stroke={color} strokeWidth="3" strokeLinecap="round" />
          <path d="M18 28 L22 28 L22 32 L18 32 Z" fill={color} />
          <path d="M20 32 L20 36" stroke={color} strokeWidth="2" />
        </svg>
      );
    case 'switch-thermostat':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <rect x="8" y="8" width="24" height="24" fill="none" stroke={color} strokeWidth="2" rx="4" />
          <circle cx="20" cy="20" r="6" fill="none" stroke={color} strokeWidth="2" />
          {state === 'closed' && (
            <circle cx="20" cy="20" r="3" fill="#FF8500">
              <animate attributeName="r" values="3;4;3" dur="1s" repeatCount="indefinite" />
            </circle>
          )}
          <path d="M20 10 L20 14" stroke={color} strokeWidth="2" />
        </svg>
      );
    case 'lamp':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <circle 
            cx="20" 
            cy="20" 
            r="12" 
            fill={energized ? '#FFDD00' : 'none'} 
            stroke={color} 
            strokeWidth="2"
            style={{ filter: energized ? `drop-shadow(0 0 8px #FFDD00)` : 'none' }}
          />
          {energized && (
            <>
              <path d="M20 4 L20 8" stroke="#FFDD00" strokeWidth="2" />
              <path d="M20 32 L20 36" stroke="#FFDD00" strokeWidth="2" />
              <path d="M4 20 L8 20" stroke="#FFDD00" strokeWidth="2" />
              <path d="M32 20 L36 20" stroke="#FFDD00" strokeWidth="2" />
            </>
          )}
          <path d="M15 25 L25 15" stroke={energized ? '#333' : color} strokeWidth="2" />
          <path d="M15 15 L25 25" stroke={energized ? '#333' : color} strokeWidth="2" />
        </svg>
      );
    case 'fan':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="14" fill="none" stroke={color} strokeWidth="2" />
          <g style={{ transformOrigin: '20px 20px' }}>
            {energized && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 20 20"
                to="360 20 20"
                dur="0.5s"
                repeatCount="indefinite"
              />
            )}
            <path d="M20 8 Q25 15 20 20 Q15 15 20 8" fill={color} />
            <path d="M32 20 Q25 25 20 20 Q25 15 32 20" fill={color} />
            <path d="M20 32 Q15 25 20 20 Q25 25 20 32" fill={color} />
            <path d="M8 20 Q15 15 20 20 Q15 25 8 20" fill={color} />
          </g>
          <circle cx="20" cy="20" r="3" fill={color} />
        </svg>
      );
    case 'fuse':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <rect x="5" y="14" width="30" height="12" fill="none" stroke={color} strokeWidth="2" rx="2" />
          {state === 'blown' ? (
            <path d="M12 20 L18 17 L22 23 L28 20" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M10 20 L30 20" stroke={color} strokeWidth="2" />
          )}
        </svg>
      );
    default:
      return <div style={{ width: size, height: size, background: '#ccc' }} />;
  }
}

// Circuit Board Component
function CircuitBoard({
  components,
  connections,
  onDrop,
  onComponentClick,
  onComponentMove,
  onTerminalClick,
  selectedTerminal,
  onDeleteComponent,
}: {
  components: CircuitComponent[];
  connections: Connection[];
  onDrop: (position: Position) => void;
  onComponentClick: (id: string) => void;
  onComponentMove: (id: string, position: Position) => void;
  onTerminalClick: (componentId: string, terminalId: string) => void;
  selectedTerminal: { componentId: string; terminalId: string } | null;
  onDeleteComponent: (id: string) => void;
}) {
  const boardRef = useRef<HTMLDivElement>(null);
  const [draggingComponent, setDraggingComponent] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const rect = boardRef.current?.getBoundingClientRect();
    if (rect) {
      onDrop({
        x: e.clientX - rect.left - 40,
        y: e.clientY - rect.top - 30,
      });
    }
  };

  const handleTouchMove = useCallback((e: React.TouchEvent, componentId: string) => {
    if (draggingComponent !== componentId) return;
    e.preventDefault();
    const touch = e.touches[0];
    const rect = boardRef.current?.getBoundingClientRect();
    if (rect) {
      onComponentMove(componentId, {
        x: touch.clientX - rect.left - dragOffset.x,
        y: touch.clientY - rect.top - dragOffset.y,
      });
    }
  }, [draggingComponent, dragOffset, onComponentMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent, componentId: string) => {
    if (draggingComponent !== componentId) return;
    const rect = boardRef.current?.getBoundingClientRect();
    if (rect) {
      onComponentMove(componentId, {
        x: e.clientX - rect.left - dragOffset.x,
        y: e.clientY - rect.top - dragOffset.y,
      });
    }
  }, [draggingComponent, dragOffset, onComponentMove]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent, componentId: string, component: CircuitComponent) => {
    e.stopPropagation();
    const rect = boardRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    let clientX: number, clientY: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    setDraggingComponent(componentId);
    setDragOffset({
      x: clientX - rect.left - component.position.x,
      y: clientY - rect.top - component.position.y,
    });
  };

  const endDrag = () => {
    setDraggingComponent(null);
  };

  // Get terminal absolute position
  const getTerminalPosition = (component: CircuitComponent, terminal: Terminal): Position => {
    return {
      x: component.position.x + terminal.position.x,
      y: component.position.y + terminal.position.y,
    };
  };

  return (
    <div
      ref={boardRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchEnd={endDrag}
      className="relative bg-[#1a1a2e] border-2 border-brand-border rounded-lg min-h-[500px] md:min-h-[600px] overflow-hidden"
      style={{ 
        backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      {/* Connection Wires */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((conn) => {
          const fromComp = components.find(c => c.id === conn.fromComponent);
          const toComp = components.find(c => c.id === conn.toComponent);
          if (!fromComp || !toComp) return null;
          
          const fromTerminal = fromComp.terminals.find(t => t.id === conn.fromTerminal);
          const toTerminal = toComp.terminals.find(t => t.id === conn.toTerminal);
          if (!fromTerminal || !toTerminal) return null;

          const from = getTerminalPosition(fromComp, fromTerminal);
          const to = getTerminalPosition(toComp, toTerminal);
          
          const isEnergized = fromComp.energized || toComp.energized;
          
          return (
            <g key={conn.id}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isEnergized ? '#FF8500' : '#666'}
                strokeWidth={isEnergized ? 4 : 2}
                strokeLinecap="round"
              />
              {isEnergized && (
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#FF8500"
                  strokeWidth={2}
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;16"
                    dur="0.5s"
                    repeatCount="indefinite"
                  />
                </line>
              )}
            </g>
          );
        })}
      </svg>

      {/* Components */}
      {components.map((component) => {
        const def = COMPONENT_DEFINITIONS[component.type];
        return (
          <div
            key={component.id}
            className={`absolute cursor-move select-none ${draggingComponent === component.id ? 'z-50' : 'z-10'}`}
            style={{
              left: component.position.x,
              top: component.position.y,
              width: def.width,
              height: def.height,
            }}
            onMouseDown={(e) => startDrag(e, component.id, component)}
            onMouseMove={(e) => handleMouseMove(e, component.id)}
            onTouchStart={(e) => startDrag(e, component.id, component)}
            onTouchMove={(e) => handleTouchMove(e, component.id)}
          >
            {/* Component Body */}
            <div
              className={`relative bg-brand-bg-tertiary border-2 rounded-lg p-2 transition-all ${
                component.energized 
                  ? 'border-brand-accent-orange shadow-lg shadow-brand-accent-orange/30' 
                  : 'border-brand-border hover:border-brand-text-secondary'
              }`}
              style={{ width: def.width, height: def.height }}
              onClick={(e) => {
                e.stopPropagation();
                onComponentClick(component.id);
              }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <ComponentIcon 
                  type={component.type} 
                  size={Math.min(def.width, def.height) - 20}
                  energized={component.energized}
                  state={component.state}
                />
              </div>
              
              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteComponent(component.id);
                }}
                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full text-xs flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
              >
                ×
              </button>
              
              {/* Label */}
              <div className="absolute -bottom-5 left-0 right-0 text-center">
                <span className="text-xs text-brand-text-secondary bg-brand-bg-secondary px-1 rounded">
                  {component.label}
                </span>
              </div>
            </div>

            {/* Terminals */}
            {component.terminals.map((terminal) => {
              const isSelected = selectedTerminal?.componentId === component.id && 
                               selectedTerminal?.terminalId === terminal.id;
              return (
                <div
                  key={terminal.id}
                  className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all transform -translate-x-1/2 -translate-y-1/2 ${
                    isSelected
                      ? 'bg-brand-accent-orange scale-150 ring-2 ring-white'
                      : component.energized
                        ? 'bg-brand-accent-orange hover:scale-125'
                        : 'bg-brand-text-tertiary hover:bg-brand-text-secondary hover:scale-125'
                  }`}
                  style={{
                    left: terminal.position.x,
                    top: terminal.position.y,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onTerminalClick(component.id, terminal.id);
                  }}
                  title={terminal.label}
                >
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-brand-text-tertiary whitespace-nowrap">
                    {terminal.label}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Empty State */}
      {components.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-brand-text-tertiary">
            <p className="text-4xl mb-4">⚡</p>
            <p className="text-lg">Drag components here to build your circuit</p>
            <p className="text-sm mt-2">Click terminals to connect wires</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Main Page Component
export default function CircuitSimulator() {
  const [components, setComponents] = useState<CircuitComponent[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedTerminal, setSelectedTerminal] = useState<{ componentId: string; terminalId: string } | null>(null);
  const [draggedType, setDraggedType] = useState<ComponentType | null>(null);
  const [circuitStatus, setCircuitStatus] = useState<'incomplete' | 'complete' | 'short'>('incomplete');
  const [showHelp, setShowHelp] = useState(false);

  // Generate unique ID
  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Handle drop from palette
  const handleDrop = (position: Position) => {
    if (!draggedType) return;
    
    const def = COMPONENT_DEFINITIONS[draggedType];
    const newComponent: CircuitComponent = {
      id: generateId(),
      type: draggedType,
      position,
      state: def.defaultState,
      energized: draggedType === 'transformer',
      label: def.label,
      terminals: def.terminals.map((t, i) => ({
        ...t,
        id: `${generateId()}-${i}`,
      })),
    };
    
    setComponents(prev => [...prev, newComponent]);
    setDraggedType(null);
  };

  // Handle component click (toggle switches, etc.)
  const handleComponentClick = (id: string) => {
    setComponents(prev => prev.map(comp => {
      if (comp.id !== id) return comp;
      
      // Toggle state for switches and thermostats
      if (comp.type.startsWith('switch') || comp.type === 'switch-thermostat') {
        return {
          ...comp,
          state: comp.state === 'open' ? 'closed' : 'open',
        };
      }
      
      return comp;
    }));
  };

  // Handle component move
  const handleComponentMove = (id: string, position: Position) => {
    setComponents(prev => prev.map(comp => 
      comp.id === id ? { ...comp, position } : comp
    ));
  };

  // Handle terminal click for wiring
  const handleTerminalClick = (componentId: string, terminalId: string) => {
    if (!selectedTerminal) {
      setSelectedTerminal({ componentId, terminalId });
    } else {
      // Don't connect to same component
      if (selectedTerminal.componentId === componentId) {
        setSelectedTerminal(null);
        return;
      }

      // Check if connection already exists
      const exists = connections.some(
        c => (c.fromComponent === selectedTerminal.componentId && c.fromTerminal === selectedTerminal.terminalId &&
              c.toComponent === componentId && c.toTerminal === terminalId) ||
             (c.fromComponent === componentId && c.fromTerminal === terminalId &&
              c.toComponent === selectedTerminal.componentId && c.toTerminal === selectedTerminal.terminalId)
      );

      if (!exists) {
        const newConnection: Connection = {
          id: generateId(),
          fromComponent: selectedTerminal.componentId,
          fromTerminal: selectedTerminal.terminalId,
          toComponent: componentId,
          toTerminal: terminalId,
        };
        setConnections(prev => [...prev, newConnection]);
      }
      
      setSelectedTerminal(null);
    }
  };

  // Delete component
  const handleDeleteComponent = (id: string) => {
    setComponents(prev => prev.filter(c => c.id !== id));
    setConnections(prev => prev.filter(c => c.fromComponent !== id && c.toComponent !== id));
  };

  // Analyze circuit and update energized states
  useEffect(() => {
    const analyzeCircuit = () => {
      // Find transformer (power source)
      const transformer = components.find(c => c.type === 'transformer');
      if (!transformer) {
        setCircuitStatus('incomplete');
        setComponents(prev => prev.map(c => ({ ...c, energized: false })));
        return;
      }

      // Build adjacency list
      const graph = new Map<string, Set<string>>();
      
      components.forEach(comp => {
        comp.terminals.forEach(term => {
          const nodeId = `${comp.id}:${term.id}`;
          if (!graph.has(nodeId)) graph.set(nodeId, new Set());
        });
      });

      connections.forEach(conn => {
        const from = `${conn.fromComponent}:${conn.fromTerminal}`;
        const to = `${conn.toComponent}:${conn.toTerminal}`;
        graph.get(from)?.add(to);
        graph.get(to)?.add(from);
      });

      // Internal component connections based on state
      components.forEach(comp => {
        if (comp.state === 'blown') return; // Blown fuse = no internal connection
        
        if (comp.type === 'transformer' || comp.type === 'fuse' || 
            (comp.type.startsWith('switch') && comp.state === 'closed') ||
            comp.type === 'lamp' || comp.type === 'fan') {
          // Connect terminals internally when closed/on
          const terms = comp.terminals;
          for (let i = 0; i < terms.length; i++) {
            for (let j = i + 1; j < terms.length; j++) {
              const from = `${comp.id}:${terms[i].id}`;
              const to = `${comp.id}:${terms[j].id}`;
              graph.get(from)?.add(to);
              graph.get(to)?.add(from);
            }
          }
        }

        // Relay internal connections
        if (comp.type.startsWith('relay')) {
          const coilPlus = comp.terminals.find(t => t.label === 'Coil+');
          const coilMinus = comp.terminals.find(t => t.label === 'Coil-');
          const com = comp.terminals.find(t => t.label === 'COM' || t.label === 'COM1');
          const nc = comp.terminals.find(t => t.label === 'NC' || t.label === 'NC1');
          const no = comp.terminals.find(t => t.label === 'NO' || t.label === 'NO1');

          if (coilPlus && coilMinus) {
            const from = `${comp.id}:${coilPlus.id}`;
            const to = `${comp.id}:${coilMinus.id}`;
            graph.get(from)?.add(to);
            graph.get(to)?.add(from);
          }

          if (com) {
            if (comp.state === 'closed' && no) {
              const from = `${comp.id}:${com.id}`;
              const to = `${comp.id}:${no.id}`;
              graph.get(from)?.add(to);
              graph.get(to)?.add(from);
            } else if (comp.state === 'open' && nc) {
              const from = `${comp.id}:${com.id}`;
              const to = `${comp.id}:${nc.id}`;
              graph.get(from)?.add(to);
              graph.get(to)?.add(from);
            }
          }
        }
      });

      // BFS from transformer R terminal
      const rTerminal = transformer.terminals.find(t => t.label === 'R');
      const cTerminal = transformer.terminals.find(t => t.label === 'C');
      if (!rTerminal || !cTerminal) return;

      const startNode = `${transformer.id}:${rTerminal.id}`;
      const endNode = `${transformer.id}:${cTerminal.id}`;
      
      const visited = new Set<string>();
      const queue = [startNode];
      visited.add(startNode);

      while (queue.length > 0) {
        const current = queue.shift()!;
        const neighbors = graph.get(current) || new Set();
        
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }

      // Check if circuit is complete (can reach C from R)
      const isComplete = visited.has(endNode);
      setCircuitStatus(isComplete ? 'complete' : 'incomplete');

      // Update energized state
      setComponents(prev => prev.map(comp => {
        const isEnergized = comp.terminals.some(t => visited.has(`${comp.id}:${t.id}`));
        
        // Update relay states based on coil energization
        if (comp.type.startsWith('relay')) {
          const coilPlus = comp.terminals.find(t => t.label === 'Coil+');
          const coilMinus = comp.terminals.find(t => t.label === 'Coil-');
          const coilEnergized = coilPlus && coilMinus && 
            visited.has(`${comp.id}:${coilPlus.id}`) && visited.has(`${comp.id}:${coilMinus.id}`);
          
          return {
            ...comp,
            energized: isEnergized,
            state: coilEnergized ? 'closed' : 'open',
          };
        }

        return { ...comp, energized: isEnergized };
      }));
    };

    analyzeCircuit();
  }, [components, connections]);

  // Reset circuit
  const resetCircuit = () => {
    setComponents([]);
    setConnections([]);
    setSelectedTerminal(null);
    setCircuitStatus('incomplete');
  };

  // Load example circuit
  const loadExample = () => {
    const transformer: CircuitComponent = {
      id: 'trans1',
      type: 'transformer',
      position: { x: 50, y: 200 },
      state: 'on',
      energized: true,
      label: '24V Transformer',
      terminals: [
        { id: 'trans1-r', label: 'R', position: { x: 0, y: 30 }, type: 'power' },
        { id: 'trans1-c', label: 'C', position: { x: 80, y: 30 }, type: 'common' },
      ],
    };

    const thermostat: CircuitComponent = {
      id: 'therm1',
      type: 'switch-thermostat',
      position: { x: 200, y: 150 },
      state: 'open',
      energized: false,
      label: 'Thermostat',
      terminals: [
        { id: 'therm1-r', label: 'R', position: { x: 0, y: 25 }, type: 'power' },
        { id: 'therm1-w', label: 'W', position: { x: 70, y: 25 }, type: 'load' },
      ],
    };

    const relay: CircuitComponent = {
      id: 'relay1',
      type: 'relay-spst',
      position: { x: 350, y: 140 },
      state: 'open',
      energized: false,
      label: 'SPST Relay',
      terminals: [
        { id: 'relay1-cp', label: 'Coil+', position: { x: 0, y: 20 }, type: 'control' },
        { id: 'relay1-cm', label: 'Coil-', position: { x: 0, y: 60 }, type: 'control' },
        { id: 'relay1-com', label: 'COM', position: { x: 70, y: 30 }, type: 'common' },
        { id: 'relay1-no', label: 'NO', position: { x: 70, y: 50 }, type: 'no' },
      ],
    };

    const lamp: CircuitComponent = {
      id: 'lamp1',
      type: 'lamp',
      position: { x: 500, y: 200 },
      state: 'off',
      energized: false,
      label: 'Indicator',
      terminals: [
        { id: 'lamp1-p', label: '+', position: { x: 0, y: 25 }, type: 'power' },
        { id: 'lamp1-n', label: '-', position: { x: 50, y: 25 }, type: 'load' },
      ],
    };

    setComponents([transformer, thermostat, relay, lamp]);
    setConnections([
      { id: 'w1', fromComponent: 'trans1', fromTerminal: 'trans1-r', toComponent: 'therm1', toTerminal: 'therm1-r' },
      { id: 'w2', fromComponent: 'therm1', fromTerminal: 'therm1-w', toComponent: 'relay1', toTerminal: 'relay1-cp' },
      { id: 'w3', fromComponent: 'relay1', fromTerminal: 'relay1-cm', toComponent: 'trans1', toTerminal: 'trans1-c' },
      { id: 'w4', fromComponent: 'trans1', fromTerminal: 'trans1-r', toComponent: 'relay1', toTerminal: 'relay1-com' },
      { id: 'w5', fromComponent: 'relay1', fromTerminal: 'relay1-no', toComponent: 'lamp1', toTerminal: 'lamp1-p' },
      { id: 'w6', fromComponent: 'lamp1', fromTerminal: 'lamp1-n', toComponent: 'trans1', toTerminal: 'trans1-c' },
    ]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-accent-orange mb-4">
          ⚡ 24V Circuit Simulator
        </h1>
        <p className="text-lg text-brand-text-secondary mb-4">
          Build and test HVAC control circuits interactively
        </p>
        
        {/* Circuit Status */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
          circuitStatus === 'complete' 
            ? 'bg-green-500/20 text-green-400' 
            : circuitStatus === 'short'
              ? 'bg-red-500/20 text-red-400'
              : 'bg-brand-bg-tertiary text-brand-text-secondary'
        }`}>
          <span className={`w-3 h-3 rounded-full ${
            circuitStatus === 'complete' ? 'bg-green-500 animate-pulse' :
            circuitStatus === 'short' ? 'bg-red-500 animate-pulse' :
            'bg-gray-500'
          }`} />
          {circuitStatus === 'complete' ? 'Circuit Complete - Current Flowing!' :
           circuitStatus === 'short' ? 'Short Circuit Detected!' :
           'Circuit Incomplete'}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        <button
          onClick={resetCircuit}
          className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition flex items-center gap-2"
        >
          🗑️ Reset
        </button>
        <button
          onClick={loadExample}
          className="px-4 py-2 bg-brand-accent-blue/20 hover:bg-brand-accent-blue/30 text-brand-accent-blue rounded-lg transition flex items-center gap-2"
        >
          📋 Load Example
        </button>
        <button
          onClick={() => setShowHelp(!showHelp)}
          className="px-4 py-2 bg-brand-bg-tertiary hover:bg-brand-bg-hover text-brand-text-secondary rounded-lg transition flex items-center gap-2"
        >
          ❓ Help
        </button>
      </div>

      {/* Help Panel */}
      {showHelp && (
        <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-brand-text-primary mb-2">How to Use:</h3>
          <ul className="text-sm text-brand-text-secondary space-y-1">
            <li>• <strong>Drag components</strong> from the palette onto the board</li>
            <li>• <strong>Click terminals</strong> (dots) to connect wires between components</li>
            <li>• <strong>Click switches/thermostats</strong> to toggle them on/off</li>
            <li>• <strong>Drag components</strong> on the board to reposition them</li>
            <li>• Orange glow and animated wires indicate <strong>current flow</strong></li>
            <li>• Relays automatically activate when their coil is energized</li>
          </ul>
        </div>
      )}

      {/* Main Layout */}
      <div className="grid lg:grid-cols-4 gap-4">
        {/* Component Palette */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <ComponentPalette onDragStart={setDraggedType} />
          
          {/* Selected Terminal Info */}
          {selectedTerminal && (
            <div className="mt-4 bg-brand-accent-orange/20 border border-brand-accent-orange rounded-lg p-3">
              <p className="text-sm text-brand-accent-orange">
                🔌 Click another terminal to connect
              </p>
              <button
                onClick={() => setSelectedTerminal(null)}
                className="text-xs text-brand-text-secondary hover:text-brand-text-primary mt-1"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Circuit Board */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <CircuitBoard
            components={components}
            connections={connections}
            onDrop={handleDrop}
            onComponentClick={handleComponentClick}
            onComponentMove={handleComponentMove}
            onTerminalClick={handleTerminalClick}
            selectedTerminal={selectedTerminal}
            onDeleteComponent={handleDeleteComponent}
          />
        </div>
      </div>

      {/* Educational Info */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-4">
          <h3 className="font-semibold text-brand-accent-orange mb-2">🔌 24V Control Circuits</h3>
          <p className="text-sm text-brand-text-secondary">
            HVAC systems use 24VAC control circuits for safety. The transformer steps down 
            line voltage to a safe level for thermostats and control relays.
          </p>
        </div>
        <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-4">
          <h3 className="font-semibold text-brand-accent-orange mb-2">🔄 Relay Operation</h3>
          <p className="text-sm text-brand-text-secondary">
            When current flows through a relay coil, it creates a magnetic field that 
            pulls the contacts closed. This allows low-voltage signals to control high-power loads.
          </p>
        </div>
        <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-4">
          <h3 className="font-semibold text-brand-accent-orange mb-2">🌡️ Thermostat Basics</h3>
          <p className="text-sm text-brand-text-secondary">
            The thermostat acts as a switch in the control circuit. When there&apos;s a call 
            for heat/cool, it closes, completing the circuit to the equipment relay.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-brand-border text-center">
        <p className="text-sm text-brand-text-tertiary">
          © 2026 Mike Kapin | Personal Professional Educational Resources
        </p>
      </div>
    </div>
  );
}
