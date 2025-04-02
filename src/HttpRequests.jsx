

const SHEET_URL = "https://script.google.com/macros/s/AKfycbzg8gwsJTkm-WwOGaKkLcAdZexJanljPITm92uX9GZdnec9_sA8Wxx5mNh_tUPBY3jY/exec"
export const sendMessage = async (formData) => {
  const response = await fetch(
    SHEET_URL, 
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      mode: "no-cors"
    }
  );
  console.log("sendMessage response", response)
}