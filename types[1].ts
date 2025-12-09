export enum TreeMode {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE',
}

export interface DualPosition {
  scatter: [number, number, number]; // x, y, z
  tree: [number, number, number];    // x, y, z
}

export interface OrnamentData {
  id: number;
  position: DualPosition;
  scale: number;
  rotationSpeed: [number, number, number];
  type: 'box' | 'sphere' | 'light';
  color: string;
}