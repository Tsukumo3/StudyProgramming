function main() {
  const canvas = document.getElementById('canvas');
  const gl = canvas.getContext('webgl');
  if (!gl) {
    console.error('Failed to obtain WebGL context');
    return;
  }

  gl.clearColor(0, 0, 0.5, 1.0);  // RGBA（暗い青）
  gl.clear(gl.COLOR_BUFFER_BIT);
}

window.addEventListener('load', main);
