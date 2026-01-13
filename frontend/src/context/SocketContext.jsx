import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            const newSocket = io('http://localhost:5000', {
                transports: ['websocket'],
            });

            newSocket.on('connect', () => {
                console.log('Connected to socket server');
                // Join room based on user ID or Role
                newSocket.emit('join_room', user._id);
            });

            setSocket(newSocket);

            return () => newSocket.disconnect();
        }
    }, [user]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
