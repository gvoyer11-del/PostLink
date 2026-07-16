<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PostLink Media - Plateforme de Copywriting IA</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .hidden-section { display: none; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between selection:bg-blue-500/30">

  <header class="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 transition-all">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" onclick="showSection('accueil')" class="flex items-center space-x-2.5 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition">
          <span class="text-lg">✍️</span>
        </div>
        <span class="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">PostLink <span class="text-blue-500 font-medium text-lg">Media</span></span>
      </a>

      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
        <button onclick="showSection('accueil')" class="nav-link hover:text-white transition active-link text-white">L'Agence</button>
        <button onclick="showSection('app')" class="nav-link hover:text-white transition">L'Outil Générateur</button>
      </nav>

      <div>
        <button onclick="showSection('app')" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20">
          Essayer l'outil
        </button>
      </div>
    </div>
  </header>

  <section id="section-accueil" class="flex-grow">
    <div class="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center relative">
      <div class="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <span class="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">Technologie IA Avancée</span>
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 text-white leading-tight">
        Propulsez votre marque sur <br class="hidden md:block">
        <span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">LinkedIn grâce au Copywriting</span>
      </h1>
      <p class="text-slate-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
        PostLink Media combine l'intelligence artificielle générative et les meilleures stratégies de persuasion humaine pour concevoir des publications performantes et engageantes en quelques secondes.
      </p>
      <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button onclick="showSection('app')" class="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-xl text-sm shadow-xl transition-all">
          Lancer le Générateur Gratuit
        </button>
        <a href="#presentation-agence" class="w-full sm:w-auto border border-slate-800 hover:bg-slate-900 text-slate-300 font-medium py-3 px-6 rounded-xl text-sm transition">
          Découvrir notre histoire
        </a>
      </div>
    </div>

    <div id="presentation-agence" class="max-w-5xl mx-auto px-6 py-16 border-t border-slate-900">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Qui sommes-nous ?</span>
          <h2 class="text-3xl font-bold text-white mt-2">La fusion entre technologie et psychologie humaine.</h2>
          <p class="text-slate-400 mt-4 leading-relaxed text-sm">
            PostLink Media est née en 2026 avec une mission claire : démocratiser l'accès au copywriting de haut niveau. Trop d'entreprises et d'entrepreneurs ont des histoires exceptionnelles à raconter, mais manquent de temps ou de méthode pour les formuler de manière captivante.
          </p>
          <p class="text-slate-400 mt-4 leading-relaxed text-sm">
            Notre équipe d'ingénieurs et de rédacteurs chevronnés a entraîné des modèles IA de pointe (Llama 3 par Groq) sur les structures d'écriture les plus performantes du web (AIDA, PAS, Storytelling narratif) pour vous livrer un outil clé en main et immédiat.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-900">
            <span class="block text-3xl font-extrabold text-blue-500">10x</span>
            <span class="block text-xs text-slate-400 mt-2">Plus rapide qu'une rédaction traditionnelle</span>
          </div>
          <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-900">
            <span class="block text-3xl font-extrabold text-indigo-500">AIDA/PAS</span>
            <span class="block text-xs text-slate-400 mt-2">Structures de persuasion intégrées</span>
          </div>
          <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-900">
            <span class="block text-3xl font-extrabold text-white">98%</span>
            <span class="block text-xs text-slate-400 mt-2">De taux de satisfaction utilisateur</span>
          </div>
          <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-900">
            <span class="block text-3xl font-extrabold text-white">0€</span>
            <span class="block text-xs text-slate-400 mt-2">Frais cachés sur notre plateforme</span>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section id="section-app" class="flex-grow hidden-section">
    <div class="max-w-5xl mx-auto px-6 py-10 w-full">
      <div class="mb-8 text-center md:text-left">
        <h1 class="text-3xl font-extrabold text-white">Console de Génération</h1>
        <p class="text-sm text-slate-400 mt-1">Configurez vos critères pour que notre IA rédige votre post sur-mesure.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <form id="generatorForm" class="md:col-span-5 space-y-5 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
          <h2 class="text-lg font-semibold text-slate-200 mb-2">Configuration</h2>
          
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Sujet principal / Idée</label>
            <textarea id="sujet" required rows="3" placeholder="Ex: 5 conseils pour réussir ses campagnes d'emails froids..." class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"></textarea>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Ton appliqué</label>
            <select id="tonifier" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500">
              <option value="histoire">Storytelling (Récit captivant)</option>
              <option value="expert">Expert / Analytique (Données & Méthodes)</option>
              <option value="persuasif">Persuasif & Vendeur</option>
              <option value="minimaliste">Minimaliste (Court & Épuré)</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Audience cible</label>
            <select id="audience" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500">
              <option value="entrepreneurs">Entrepreneurs / Fondateurs</option>
              <option value="recruteurs">Recruteurs / RH</option>
              <option value="leads">Clients potentiels (B2B)</option>
              <option value="general">Grand public / Communauté</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Formule de Copywriting</label>
            <select id="structure" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500">
              <option value="aida">AIDA (Attention, Intérêt, Désir, Action)</option>
              <option value="pas">PAS (Problème, Agitation, Solution)</option>
              <option value="standard">Standard (Classique efficace)</option>
            </select>
          </div>

          <div class="flex items-center justify-between pt-2">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" id="emojis" checked class="rounded bg-slate-950 border-slate-800 text-blue-500 focus:ring-0">
              <span class="text-xs text-slate-300">Emojis</span>
            </label>
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" id="hashtags" class="rounded bg-slate-950 border-slate-800 text-blue-500 focus:ring-0">
              <span class="text-xs text-slate-300">Hashtags</span>
            </label>
          </div>

          <button type="submit" id="submitBtn" class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg text-sm shadow-lg transition flex justify-center items-center space-x-2">
            <span>Générer le Post</span>
          </button>
        </form>

        <div class="md:col-span-7 flex flex-col space-y-4">
          <div class="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl flex-grow flex flex-col min-h-[400px]">
            <div class="border-b border-slate-800 px-5 py-3 flex justify-between items-center bg-slate-900/50 rounded-t-2xl">
              <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Rendu final</span>
              <button id="copyBtn" class="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-md transition flex items-center space-x-1">
