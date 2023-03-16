import { useState } from 'react';

const useFormTest = (initialState: any) => {

    const [state, setState] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.persist();
        setState(state => ({ ...state, [e.target.name] : e.target.value }))
    }

    return [state, handleChange];
}

export default useFormTest;