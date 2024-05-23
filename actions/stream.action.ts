"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.STREAM_PUBLIC_API_KEY;
const apiSecreat = process.env.STREAM_SECRET_API_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();

    if(!user) throw new Error('User is not logged in')
    if(!apiKey) throw new Error('api is not available')
    if(!apiSecreat) throw new Error('secret api is not available')

    const client = new StreamClient(apiKey, apiSecreat)

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(Date.now() / 1000) - 60;
    const token = client.createToken(user.id, exp, issued);

    return token;
}