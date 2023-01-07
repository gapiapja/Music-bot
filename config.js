module.exports = {
    app: {
        token: 'MTA2MTA2ODgyOTg4ODg4MDY4MQ.GIMKdM.IIypFYqvkxZDge1_tFVZYYriBFT-dG5k03Kvvc',
        playing: 'by Gapiapja',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
