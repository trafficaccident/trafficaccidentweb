var rest = {
    save: function(inEvent, inDetail, inSender) {
        console.log('better data: ', this.serializeArray(inSender));
        var formObj = this.serializeArray(inSender);
        $.post('/api/user', formObj, function(response) {
            console.log('response: ', response)
        });
        event.preventDefault();
    },
    post: function(data) {
    },
    put: function(data) {
    },
    serializeArray: function(element) {
        var arr = $(element).serializeArray();
        var obj = {};
        for(var i=0; i != arr.length; ++i)
            obj[arr[i].name] = arr[i].value;

        return obj;
    },
};
