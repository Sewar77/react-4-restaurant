import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useMessage = () => {
    const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("messages")) || []);
    const [approvedMessages, setApprovedMessages] = useState([]);
    const fetchAllMessages = () => {
        try {
            const allMessages = JSON.parse(localStorage.getItem("messages")) || [];
            setMessages(allMessages);
        } catch (error) {
            console.log(error);
        }
    };
    // update: id for the selected, the new data
    const updateMessage = ({ id, newStatus }) => {
        try {
            // 1- find the selected item to update
            // 2- update on selected feilds
            // 3- save the new message in local storage

            const newMessages = messages.map((msg) =>
                msg.id === id ? { ...msg, status: newStatus } : msg
            );
            setMessages(newMessages);
            localStorage.setItem("messages", JSON.stringify(newMessages));

            // const selectedMessage = messages.find((msg) =>
            //     msg.id === id ? { ...msg, status: newStatus } : msg
            // ); new array

            // const newMessages = [...messages, selectedMessage];
            // localStorage.setItem("messages", JSON.stringify(newMessages));
            toast.success("Message updated!");
        } catch (error) {
            console.log(error);
        }
    };
    const fetchApprovedMessages = () => {
        try {
            const approvedMessages = messages.filter(
                (msg) => msg.status === "approved"
            );
            localStorage.setItem(
                "approvedMessages",
                JSON.stringify(approvedMessages)
            );
            setApprovedMessages(approvedMessages);
        } catch (error) {
            console.log(error);
        }
    };
    const createMessage = ({ name, email, message }) => {
        try {
            if (!name || !message) {
                toast.error("name and message are requiered!");
                return;
            }
            const newMessage = {
                name: name,
                email: email,
                message: message,
                id: Date.now(),
                status: "pending", // pending, rejected, approved
            };
            const updatedMessage = [...messages, newMessage];
            // shallow copy
            localStorage.setItem("messages", JSON.stringify(updatedMessage));
            setMessages(updatedMessage);
            toast.success("your message was sent! admin will review the message!");
            console.log(messages);
        } catch (error) {
            console.log(error);
        }
    };
    return {
        messages,
        createMessage,
        fetchAllMessages,
        updateMessage,
        fetchApprovedMessages,
        approvedMessages,
    };
};
