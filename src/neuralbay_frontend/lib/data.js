export const generateImage = async (prompt) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URI}/generate-image/?prompt=${prompt}`,
        {
          method: "POST",
          headers: {},
        }
      );
  
      if (!res.ok) {
        throw new Error("Failed to generate image.");
      }
  
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
  
      const image = new Image();
      image.src = url;
  
      return url;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const generateChat = async (prompt) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URI}/chat/?prompt=${prompt}`,
        {
          method: "POST",
        }
      );
  
      if (!res.ok) {
        throw new Error("Failed to generate Chat.");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const generateTranscribe = async (formData) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URI}/transcribe/`, {
        method: "POST",
        body: formData,
        redirect: "follow",
      });
  
      if (!res.ok) {
        throw new Error("Failed to generate Transcribe.");
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  