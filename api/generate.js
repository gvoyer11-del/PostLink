export default async function handler(req, res) {
    // On refuse toutes les requêtes qui ne sont pas du POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    // Récupération des données envoyées par la page d'accueil (index.html)
    const { topic, tone } = req.body;

    // Consigne de base pour l'IA (Le Prompt)
    let systemPrompt = "Tu es un copywriter expert sur LinkedIn. Rédige un post percutant en français, avec des phrases courtes, des sauts de ligne fréquents pour aérer, et quelques émojis bien choisis. Ne mets jamais d'introduction ni de conclusion méta, donne directement le post.";
    
    // Adaptation du comportement selon le choix de l'utilisateur
    if (tone === 'story') {
        systemPrompt += " Utilise une approche narrative (storytelling) forte : commence par un crochet captivant, raconte une expérience ou une erreur vécue, puis donne la leçon apprise.";
    } else {
        systemPrompt += " Adopte un ton d'expert analytique. Donne de la valeur concrète, des faits ou une méthodologie claire étape par étape.";
    }

    try {
        // Envoi sécurisé de la demande à l'API de Groq
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`, // Appel de la clé secrète cachée sur Vercel
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile', // Modèle performant et ultra-rapide
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: `Sujet du post : ${topic}` }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();
        
        // Si Groq répond correctement, on renvoie le texte généré au site
        if (data.choices && data.choices[0]) {
            const aiText = data.choices[0].message.content;
            return res.status(200).json({ text: aiText });
        } else {
            return res.status(500).json({ error: "Erreur de réponse de l'API externe" });
        }

    } catch (error) {
        // En cas de problème réseau ou technique
        return res.status(500).json({ error: "Erreur lors de la génération" });
    }
}
