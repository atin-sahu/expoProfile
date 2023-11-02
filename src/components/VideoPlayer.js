import React, { useState } from 'react'
import { View, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export const VideoPlayer = () => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={{ backgroundColor: 'red' }}>
            <Video
                ref={video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                usePoster={true}
                posterSource={require('../../assets/profile.jpg')}
                posterStyle={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                style={{ width: '100%', minHeight: 250}}
            />
            <View>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>
    );
}
