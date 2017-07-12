

var MEDIA_URL = 'media/';
var URL_PRE_PATH_FOR_PACKAGED_APPS = 'https://workflowy.com';

var APPCACHE_ENABLED = false;
var FULL_OFFLINE_ENABLED = true;

var APPCACHE_ID = "static";
var SOURCE_VERSION = "static";

var ON_DEVELOPMENT_SERVER = false;

var STRIPE_PUBLIC_KEY = "pk_CmKpB4xe07hPbOxu5RHgJu5kpaStP";

var LOG_DEBUG_MESSAGES = false;

var DEMO_MODE = false;
var EMBED = false;

var THEME_OPTIONS = [{"pretty_name": "Default", "font": "default", "type": "theme", "name": "default", "is_free": true}, {"pretty_name": "Dark", "font": "lucidagrande", "type": "theme", "name": "dark", "is_free": false}];
var FONT_OPTIONS = [{"pretty_name": "Sans-serif", "font_styles": "font-family:'Helvetica Neue', Arial, Sans-serif;font-weight:normal;", "type": "font", "name": "default", "is_free": true}, {"pretty_name": "Serif", "font_styles": "font-family:Georgia, Times, serif;font-weight:normal;", "type": "font", "name": "times", "is_free": true}, {"pretty_name": "Light", "font_styles": "font-family:'Helvetica Neue', Arial, Sans-serif;font-weight:300;", "type": "font", "name": "helvetica_light", "is_free": false}, {"pretty_name": "Typewriter", "font_styles": "font-family:Courier, Monospace;font-weight:normal;", "type": "font", "name": "courier", "is_free": false}, {"pretty_name": "Terminal", "font_styles": "font-family:\"Andale Mono\", Monospace;font-weight:normal;", "type": "font", "name": "andale", "is_free": false}, {"pretty_name": "Interface", "font_styles": "font-family:\"Lucida Grande\", \"Lucida Sans Unicode\";font-weight:normal;", "type": "font", "name": "lucidagrande", "is_free": false}];

var GUIDE_ID = false;


var FIRST_LOAD_FLAGS = {
    showProWelcome: false,
    showFriendRecommendation: false,
    showPrivateSharingNotice: false,
    showNewUserTutorial: false,
    showUpgradeDialog: false,
    isNewUser: false
};

// Data structure for holding settings. We overwrite the null 'value's
// with the actual settings when we get them in the initialization
// data.
var SETTINGS = {
    theme: { value: null, isFlag: false, saveToClient: true, saveToServer: true },
    font: { value: null, isFlag: false, saveToClient: true, saveToServer: true },
    show_keyboard_shortcuts: { value: null, isFlag: true, saveToClient: true, saveToServer: true },
    unsubscribe_from_summary_emails: { value: null, isFlag: true, saveToClient: true, saveToServer: true },
    backup_to_dropbox: { value: null, isFlag: true, saveToClient: true, saveToServer: true },
    email: { value: null, isFlag: false, saveToClient: true, saveToServer: false },
    username: { value: null, isFlag: false, saveToClient: true, saveToServer: false },
    last_seen_message_json_string: { value: null, isFlag: false, saveToClient: true, saveToServer: true },
    saved_views_json: { value: null, isFlag: false, saveToClient: true, saveToServer: true },
    auto_hide_left_bar: { value: null, isFlag: true, saveToClient: true, saveToServer: true }
};

var IS_PACKAGED_APP = true;
var IS_CHROME_APP = true;
var IS_ANDROID_APP = false;

var NO_ANIMATIONS = false;
var READ_ONLY_MAIN_TREE = false;

var IS_MOBILE = false;
var IS_TABLET = false;
var IS_IOS = false;
var IOS_VERSION = null;
var IS_IE = false;
var IE_VERSION = null;
var IS_ANDROID = false;
var IS_FIREFOX = false;
var IS_CHROME = false;
var IS_SAFARI = false;
