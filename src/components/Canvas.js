export default function Canvas() {

    return (    
    
     <section className="canvas" id="myapp">
        <label htmlFor="fileInput" className="custom-file-upload" id="fileButton">
          Choose your picture
        </label>
        <input style={{ display: "none" }} type="file" accept="image/*" id="fileInput" />
      </section>

    )      

}