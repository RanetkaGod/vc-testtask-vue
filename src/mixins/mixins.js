let mixin = {
    methods: {
        scrollToElement: function (id, timeout, inline='center', block='center') {
            setTimeout(scrollToElementById, timeout, id)
            function scrollToElementById(id) {
                document.getElementById(id).scrollIntoView(
                    {behavior: 'smooth', inline: inline, block: block})
            }
        }
    }
}

export default mixin