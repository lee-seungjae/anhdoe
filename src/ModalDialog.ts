export class ModalDialog
{
    // controls
    private $background: JQuery;
    private $window: JQuery;
    private $closeButton: JQuery;

    // fields
    private animationStyle: string;

    // events
    onClose: () => void;

    constructor(nodeId: string, animationStyle: string, buttonCaption: string)
    {
        this.animationStyle = animationStyle;

        this.$background = $('#modalBackground')
        let child = (cname: string) => $(`#modalBackground ${cname}`);
        this.$window = child('#' + nodeId)
        this.$closeButton = child('#closeButton')
        this.$closeButton.text(buttonCaption);
        this.$closeButton.click(() => this.onClose());
    }

    findChild(selector: string): JQuery
    {
        return this.$window.find(selector);
    }

    show(yes: boolean): void
    {
        if (yes)
        {
            this.$background.show();
            this.$window.css('animation', this.animationStyle);
            this.$window.show();
            this.$closeButton.focus();
        }
        else
        {
            this.$background.hide();
            this.$window.hide();
        }
    }
}