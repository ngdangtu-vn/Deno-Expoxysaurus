import { serve } from 'http/server.ts'
import { VERSION, ip_lan, opt, svr_cfg } from 'info'
import { err_requirement, prt_help } from 'msg'
import { get_proxy_response, replace_wrap_links } from 'utility'



async function main(req: Request): Promise<Response>
{
	const path = new URL(req.url).pathname
	const wrap_res = await fetch(`${opt.schema}://${opt.wrap}/${path}`)

	// console.log(wrap_res.headers)s

	const body = await replace_wrap_links(wrap_res)
	const init = get_proxy_response(wrap_res)

	return new Response(body, init)
}


export default function app()
{
	if (opt.help)
	{
		prt_help()
		Deno.exit(0)
	}

	if (opt.version)
	{
		console.log(`Expoxysaurus v${VERSION}`)
		Deno.exit(0)
	}

	if (!opt.wrap)
	{
		err_requirement()
		prt_help()
		Deno.exit(74) // input error: https://unix.stackexchange.com/a/254747
	}

	console.log(`LAN IP is http://${ip_lan}:${opt.port}`)

	serve(main, svr_cfg)
}