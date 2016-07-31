var config = {
	db : {
		uri : 'mongodb://user:passwor@server.com:27017/bitcannon'
	},
	redis : {
		port : 6379,
		host : '127.0.0.1',
		options : {}
	},
    trackers: [
    "udp://tracker.openbittorrent.com:80/announce",
    "udp://tracker.piratepublic.com:1337/announce"
  ],
  limitExt : 8,
  extToIgnore : [
    '.url', '.txt', '.ico', '.srt', '.gif', '.log', 
    '.nfo', '.ass', '.lnk', '.rtf', '.bc!', 
    '.bmp', '.m3u', '.mht', '.cue', '.sfv', '.diz',
    '.azw3', '.odt', '.chm', '.md5', '.idx', '.sub',
    '.ini', '.html', '.ssa', '.lit', '.xml', '.clpi',
    '.bup', '.ifo', '.htm', '.info', '.css', '.php', 
    '.js', '.jar', '.json', '.sha', '.docx', '.csv',
    '.scr', '.inf', '.hdr', '.prq', '.isn', '.inx', '.tpl', 
    '.aco', '.opa', '.dpc', '.qdl2', '.acf', '.cdx', 
    '.iwd', '.ff', '.tmp', '.asi', '.flt', '.cfg', 
    '.tdl', '.tta', '.ape', '.btn', '.sig', '.sql', '.db', 
    '.zdct', '.bak', '.fxp', '.nxp', '.nsk', '.256', 
    '.mpls', '.clpi', '.bdmv', '.cdd', '.dbf', 
    '.vmx', '.vmsd', '.vmxf', '.nvram'
  ],
};

module.exports = config;
