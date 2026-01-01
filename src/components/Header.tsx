import React from 'react';

export function Header() {
  return (
    <header className="relative bg-gradient-to-b from-black to-gray-900 pb-8">
      <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Napolli Pizzaria"
              className="h-24 md:h-32 w-auto drop-shadow-lg"
            />
          </div>

          <div className="w-full max-w-2xl mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Pizza napolitana fresca"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            A Autêntica Pizza Brasileira,<br />Entregue na Sua Porta.
          </h2>

          <p className="text-green-400 font-medium text-lg md:text-xl flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Aberto aos Domingos das 8h30 às 00h00
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </header>
  );
}
