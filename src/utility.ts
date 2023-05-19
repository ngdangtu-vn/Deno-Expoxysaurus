import { ip_lan, opt } from 'info'

export function get_ip_lan(): string | null
{
	const iNet_ls = Deno.networkInterfaces()

	for (const iNet of iNet_ls)
	{
		if (iNet.family !== 'IPv4') continue
		if (iNet.name === 'lo') continue
		return iNet.address
	}
	return null
}

export async function replace_wrap_links(res: Response): Promise<BodyInit | null>
{
	if (!res.body || !ip_lan) return null

	const not_text_type = !res.headers.get('content-type')?.includes('text')
	if (not_text_type) return res.body

	let new_body = ''

	// TODO improve later as this could fail to replace pattern got chunked
	for await (const chunk of res.body)
	{
		new_body += new TextDecoder()
			.decode(chunk)
			.replaceAll(opt.wrap, `${ip_lan}:${opt.port}`)
	}

	return new_body
}

export function get_proxy_response(wrap_res: Response): ResponseInit
{
	const new_header = new Headers()

	for (const [key, val] of wrap_res.headers.entries())
	{
		if (key === 'link')
		{
			new_header.set(key, val.replaceAll(opt.wrap, `${ip_lan}:${opt.port}`))
			continue
		}

		new_header.set(key, val)
	}

	console.log(new_header)

	return {
		status: wrap_res.status,
		headers: wrap_res.headers,
	}
}