export interface WebGLState {
  scrollProgress: number;
  scrollVelocity: number;
  mouseX: number;
  mouseY: number;
  activeDrawerProject: string | null;
  viewMode: 'stage' | 'grid';
  currentProjectIndex: number;
}

export const webglState: WebGLState = {
  scrollProgress: 0,
  scrollVelocity: 0,
  mouseX: 0,
  mouseY: 0,
  activeDrawerProject: null,
  viewMode: 'stage',
  currentProjectIndex: 0,
};

type Listener = () => void;
const listeners = new Set<Listener>();

export function subscribeWebGL(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function notifyWebGL() {
  listeners.forEach((l) => l());
}

export function setActiveDrawerProject(projectId: string | null) {
  webglState.activeDrawerProject = projectId;
  notifyWebGL();
}

export function setViewMode(mode: 'stage' | 'grid') {
  webglState.viewMode = mode;
  notifyWebGL();
}

export function setCurrentProjectIndex(index: number) {
  webglState.currentProjectIndex = index;
  notifyWebGL();
}
