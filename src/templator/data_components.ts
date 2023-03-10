// ==	Components
import buttons		from '../components/Button/buttons';
import add_text		from '../components/add_text';
import close_button	from '../components/Button/close';
import more_button	from '../components/Button/more';
import attach_button from '../components/Button/attach';
import form_login	from '../components/Forms/form_login';
import form_signup	from '../components/Forms/form_signup';
import form_search	from '../components/Forms/form_search';
import form_profile	from '../components/Forms/form_profile';
import form_password from '../components/Forms/form_password';
import form_avatar from '../components/Forms/form_avatar';
import message_box	from '../components/Messages/message_box';
import messages_frame from '../components/Messages/message_list';
import chats_frame from '../components/Chat/chat_list';
import chat_header from '../components/Chat/header';
import chat_details from '../components/Chat/details';
import chat_delete from '../components/Chat/delete';
import chat_users from '../components/Chat/user_list';
import add_user_list from '../components/Users/add_user_list';

const templates:Record<string, Function | string>={
	text:				add_text,
	buttons,
	close_button,
	more_button,
	attach_button,
	form_login,
	form_signup,
	form_search,
	form_profile,
	form_password,
	form_avatar,
	message_box,
	messages_frame,
	chats_frame,
	chat_header,
	chat_details,
	chat_delete,
	chat_users,
	add_user_list,
};

export default templates;
