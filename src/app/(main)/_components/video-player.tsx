"use client"
import { Button } from '@/components/ui/button'
import { useCheckPremium } from '@/lib/hooks/users/use-check-premium'
import React from 'react'

const VideoPlayer = () => {
    const { data: isPremium,
        isPending,
        isError
    } = useCheckPremium()
    if (isPending) {
        return <div>Loading...</div>
    }
    // if (isError) {
    //     return <div>Error...</div>
    // }
    if (!isPremium) {
        return <div >
            <p>Upgrade to premium to whatch this video</p>
            <Button>
                clickme
            </Button>
        </div >
    }
    if (isError) {
        return <div>Error...</div>
    }


    return (
        <div><iframe src="https://iframe.mediadelivery.net/embed/297449/d4644f9c-8b27-4742-8e30-ac560aa6deed?autoplay=true&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style={{ border: 0, position: "absolute", top: 0, height: "100%", width: "100%" }} allowFullScreen={true} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" ></iframe></div>
    )
}

export default VideoPlayer