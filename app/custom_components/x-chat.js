Polymer({
    is: 'chat-box',
    ready: function() {
        this.messages = [
            {sender_id: 1,icon: 'cloud', sender: 'PubNub',message_id: 1, message: 'From Pubnub1', time: '7.29 AM'},
            {sender_id: 2,icon: 'polymer', sender: 'Polymer',message_id: 2, message: 'From polymer', time: '7.30 AM'},
            {sender_id: 1,icon: 'cloud', sender: 'PubNub',message_id: 3, message: 'From polymer', time: '7.31 AM'},
            {sender_id: 2,icon: 'polymer', sender: 'Polymer',message_id: 4, message: 'From polymer', time: '7.32 AM'},
            {sender_id: 2,icon: 'polymer', sender: 'Polymer',message_id: 5, message: 'From polymer', time: '7.33 AM'},
            {sender_id: 1,icon: 'cloud', sender: 'PubNub',message_id: 6, message: 'From polymer', time: '7.34 AM'},
            {sender_id: 2,icon: 'polymer', sender: 'Polymer',message_id: 7, message: 'From polymer', time: '7.35 AM'},
            {sender_id: 1,icon: 'cloud', sender: 'PubNub',message_id: 8, message: 'From polymer', time: '7.37 AM'}
        ];
    },

    classColor: function(sender_id) {
        var logged_id = 2;
        return logged_id==sender_id? 'host':'remote';
    }
});

document.querySelector('#previous').scroller.scrollTop = 2000;