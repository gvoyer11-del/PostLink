export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sujet, tonifier } = req.body;

  let systemPrompt = "Tu es un copywriter expert sur LinkedIn. Rédige un post percutant en français, avec des phrases courtes et des emojis.";
  if (tonifier === 'histoire') {
    systemPrompt += " Utilise une approche narrative (storytelling) forte : commence par un crochet captivant, raconte un défi, puis donne une leçon apprise.";
  } else {
    systemPrompt += " Adopte un ton d'expert analytique. Donne de la valeur concrète, des faits ou une méthodologie claire étape par étape.";
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Rédige un post LinkedIn sur le sujet suivant : ${sujet}` }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
