Polymer({
    is: 'chat-box',
    ready: function() {
        this.messages = [
            {sender_id: 1,icon: 'cloud', sender: 'PubNub',message_id: 1, message: 'From Pubnub1'},
            {sender_id: 2,icon: 'polymer', sender: 'Polymer',message_id: 2, message: 'From polymer'},
            {sender_id: 1,icon: 'cloud', sender: 'PubNub',message_id: 3, message: 'From polymer'},
            {sender_id: 2,icon: 'polymer', sender: 'Polymer',message_id: 4, message: 'From polymer'},
            {sender_id: 2,icon: 'polymer', sender: 'Polymer',message_id: 5, message: 'From polymer'},
            {sender_id: 1,icon: 'cloud', sender: 'PubNub',message_id: 6, message: 'From polymer'},
            {sender_id: 2,icon: 'polymer', sender: 'Polymer',message_id: 7, message: 'From polymer'},
            {sender_id: 1,icon: 'cloud', sender: 'PubNub',message_id: 8, message: 'From polymer'}
        ];
    },

    classColor: function(sender_id) {
        var logged_id = 1;
        return logged_id==sender_id? 'host':'remote';
    }
});