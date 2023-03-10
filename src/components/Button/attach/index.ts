import Component from '../../../services/Component';
import {replaceDOM} from '../../../services/render-dom';
import classes from './.module.css';

type ButtonProps={
	name:string,
	text:string,
	class?:string,
	events?:Record<string, unknown>
};

class AttachmentButton extends Component<ButtonProps> {
	constructor(props:ButtonProps) {
		super('button', props);
	}

	render():string {
		if(this.props.text){
			return this.props.text;
		}return '';
	}
}

function attachmentButton(uuid:string, props:Record<string, any>={}):void{
	const button=new AttachmentButton(<ButtonProps>{
		name: 'attach_button',
		text: '&nbsp;',
		className: classes.attach_button,
		events:{
			click:()=>(props['onclick'] ? props['onclick']() : window.open('#', '_self')),
		},
	});
	replaceDOM(uuid, button);
}

export default attachmentButton;
