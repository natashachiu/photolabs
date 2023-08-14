import { useState } from 'react';

const useSearchBar = (onSubmit) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm.toLowerCase());
    setSearchTerm("");
  };

  return { handleSubmit, searchTerm, setSearchTerm };

};

export default useSearchBar;