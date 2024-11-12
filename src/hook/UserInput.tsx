import { File } from 'buffer';
import { useState } from 'react'

export enum Role {
    admin = "admin",
    user = "user"
}

export enum State {
    active = "active",
    inactive = "inactive"
}

export const UserInput = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('')
    const [role, setRole] = useState<Role | undefined>(undefined)
    
    const [state, setState] = useState<State | undefined>(undefined);
    const [image, setImage] = useState<string | undefined>();

    return {
        email, 
        state,
        setState,
        username,
        role,
        setRole,
        setUsername,
        setEmail, 
        image,
        setImage
    }

}


