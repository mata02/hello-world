```
yarn create playwright
```
* mcp.json
```json
{
	"servers": {
		"playwright": {
			"type": "stdio",
			"command": "npx",
			"args": [
				"@playwright/mcp@latest"
			]
		}
	}
}
```
