let mixin = {
    methods: {
        scrollToElement: function (id, timeout) {
            setTimeout(scrollToElementById, timeout, id)
            function scrollToElementById(id) {
                document.getElementById(id).scrollIntoView(
                    {behavior: 'smooth', inline: 'center', block: 'center'})
            }
        }
    }
}

export default mixin