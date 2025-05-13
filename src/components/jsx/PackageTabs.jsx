import { useState } from 'react';

export default function PackageTabs({ npm, pnpm, bun }) {
  const [tab, setTab] = useState('npm');
  const commands = { npm, pnpm, bun };

  return (
    <div className="border p-4 rounded h-[180px]">
      <div className="flex gap-4">
        {Object.keys(commands).map((key) => (
          <button key={key} onClick={() => setTab(key)} className={tab === key ? 'font-normal' : ''}>
            {key}
          </button>
        ))}
      </div>
      <pre className='h-auto p-0 m-0 items-center justify-center overflow-hidden'><code>{commands[tab]}</code></pre>
    </div>
  );
} 