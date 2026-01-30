import Image from 'next/image'

// Terraria-themed icon component using actual game sprites
export function TerrariaIcon({ 
  type, 
  className = "" 
}: { 
  type: 'pickaxe' | 'sword' | 'heart' | 'star' | 'coin' | 'chest' | 'potion' | 'gem' | 'hammer' | 'guide' | 'slime' | 'eye' | 'meowmere' | 'zenith' | 'angler' | 'arms-dealer' | 'cyborg' | 'moon-lord' | 'plantera' | 'dungeon-guardian' | 'mana' | 'jungle-wall' | 'chainmail' | 'goblin-tinkerer'
  className?: string 
}) {
  const iconMap: Record<string, string> = {
    'heart': '/Heart.webp',
    'guide': '/Guide.webp',
    'angler': '/Angler.webp',
    'arms-dealer': '/Arms_Dealer.webp',
    'cyborg': '/Cyborg.webp',
    'goblin-tinkerer': '/Map_Icon_Goblin_Tinkerer.webp',
    'slime': '/Bestiary_Surface.webp',
    'eye': '/24px-Map_Icon_Eye_of_Cthulhu_(first_form).webp',
    'moon-lord': '/24px-Map_Icon_Moon_Lord.webp',
    'plantera': '/24px-Map_Icon_Plantera_(first_form).webp',
    'dungeon-guardian': '/47px-Dungeon_Guardian.webp',
    'sword': '/Meowmere.webp',
    'meowmere': '/Meowmere.webp',
    'pickaxe': '/Zenith.webp',
    'zenith': '/Zenith.webp',
    'chainmail': '/20px-Iron_Chainmail.webp',
    'chest': '/20px-Iron_Chainmail.webp',
    'mana': '/18px-Mana.webp',
    'coin': '/18px-Mana.webp',
    'gem': '/18px-Mana.webp',
    'jungle-wall': '/Jungle_Wall_(placed).webp',
    'hammer': '/47px-Dungeon_Guardian.webp',
    'star': '/Fallen_Star.png',
  }

  const src = iconMap[type]
  
  if (!src) return null

  return (
    <div className={`relative inline-block ${className}`} style={{ imageRendering: 'pixelated' }}>
      <Image 
        src={src} 
        alt={type}
        width={24}
        height={24}
        className="w-full h-full object-contain"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  )
}
