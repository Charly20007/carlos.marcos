export interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string | null;
    onSelectCategory: (category: string | null) => void;
}

export interface Premiere {
    description: string;
    image: string;
    category: string;
}

export interface NameFilterProps {
    onFilterByName: (name: string) => void;
    onClearFilters: () => void;
}

export interface User {
    email: string;
    password: string;
}

export interface Premiere {
    description: string;
    image: string;
    category: string;
}
  
export interface PremiereCardProps {
    premiere: Premiere;
}