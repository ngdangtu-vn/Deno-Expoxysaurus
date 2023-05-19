import { ServeInit } from 'http/mod.ts'
import { parse } from 'flags/mod.ts'
import { get_ip_lan } from 'utility'



export const VERSION = '0.0.1'


export const opt = parse(Deno.args, {
	alias: {
		'wrap': 'w',
		'port': 'p',
		'schema': 's',
		'help': 'h',
		'version': 'v',
	},
	boolean: ['help', 'version'],
	string: ['wrap', 'port', 'schema'],
	default: {
		help: false,
		port: '3000',
		schema: 'http',
		wrap: '', // if empty string, exit program
	},

})


export const svr_cfg: ServeInit =
{
	hostname: '0.0.0.0',
	port: parseInt(opt.port),
}


export const ip_lan = get_ip_lan()
