export default function Canvas() {
  
  return (
    <section className='canvas' id="myapp" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <label htmlFor="fileInput"  id="fileButton" className="custom-file-upload">
        Choose your picture
      </label>
      <input
        style={{ display: 'none' }}
        type="file"
        accept="image/*"
        id="fileInput"
      />
    </section>
  );
}
