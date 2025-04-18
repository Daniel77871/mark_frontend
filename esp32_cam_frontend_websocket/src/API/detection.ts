// src/API/detection.ts

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const toggleDetection = async (action: 'on' | 'off', token: string) => {
    const response = await fetch(`${API_BASE_URL}/api/toggle_detection/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ action }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to toggle detection');
    }
  
    return response.json();
  };
  