import React, { useState, useTransition } from 'react';

export function SearchFilter({ items }: { items: string[] }) {
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState('');
  const [filteredList, setFilteredList] = useState(items);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // 1. Urgent Update: Update the input field immediately
    setFilter(value);

    // 2. Non-Urgent Update: The heavy filtering logic
    startTransition(() => {
      const result = items.filter(item => item.includes(value));
      setFilteredList(result);
    });
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleChange} />
      
      {/* Show a subtle hint that the list is updating */}
      {isPending && <p>Updating list...</p>}
      
      <ul style={{ opacity: isPending ? 0.5 : 1 }}>
        {filteredList.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}



// const deferredItems = useDeferredValue(items);
// React will prioritize other updates and only update deferredItems when it's "quiet"