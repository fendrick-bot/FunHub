"use client"
import { useChatList } from "@/hooks/chat";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Loder from "../HomePage/Loder";


function RenderRow({ value }) {
    return (
        <Link style={{ textDecoration: "none" }} href={`/c/${value.id}?name=${value.name}`}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'orangered' }} alt="Travis Howard">{value.name.charAt(0).toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={value.username}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {value.name}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component='div' />
        </Link>
    );
}



export default function AllChatPage() {
    const { data, isLoading } = useChatList();
    return (
        <>
            <List sx={{ width: '100%' , bgcolor: 'background.paper' }}>
                {!isLoading && data.success && data.data.map((value, i) => {
                    return (
                        <RenderRow key={i} value={value.users[0]} />
                    )
                })}
                {isLoading && <Loder/>}
            </List>
        </>
    )
}