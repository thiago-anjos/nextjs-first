import { useState } from 'react';

function Loading() {
  const [loading, setLoading] = useState(false);
  return { setLoading, loading };
}

export default Loading;
