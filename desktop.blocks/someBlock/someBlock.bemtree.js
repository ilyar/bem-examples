block('someBlock')(
    def()(function() {
        var data = this.ctx.data || {};
        this.ctx.mods = { loaded: true };
        this.ctx.content = [
            { elem: 'title', content: data.title || 'Empty title' },
            data.question && { elem: 'question', content: data.question || 'Empty question' },
            data.content && { elem: 'content', content: data.content || 'Empty content' },
            data.question && { block : 'control-group',
                mix: { block: 'someBlock', elem: 'answer' },
                content : [
                    {
                        block : 'input',
                        mods : { theme : 'normal', size : 'l' },
                        placeholder: 'enter Name'
                    },
                    {
                        block : 'button',
                        mods : { theme : 'normal', size : 'l' },
                        text : 'say'
                    }
                ]
            }];
        return applyNext();
    })
);
