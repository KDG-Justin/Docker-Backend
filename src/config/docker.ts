import Docker from 'dockerode';

// Mverbinding met lokale docker daemon socket
const docker = new Docker();

export default docker;