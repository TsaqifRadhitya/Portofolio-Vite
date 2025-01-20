import Card_Skill from "../Components/Card_Skill"
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"

export default function Skill() {
    const skil = [{
        Title: "Python",
        Image:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zMS44ODUgMTZjLTguMTI0IDAtNy42MTcgMy41MjMtNy42MTcgMy41MjNsLjAxIDMuNjVoNy43NTJ2MS4wOTVIMjEuMTk3UzE2IDIzLjY3OCAxNiAzMS44NzZjMCA4LjE5NiA0LjUzNyA3LjkwNiA0LjUzNyA3LjkwNmgyLjcwOHYtMy44MDRzLS4xNDYtNC41MzcgNC40NjUtNC41MzdoNy42ODhzNC4zMi4wNyA0LjMyLTQuMTc1di03LjAxOVM0MC4zNzQgMTYgMzEuODg1IDE2em0tNC4yNzUgMi40NTRjLjc3MSAwIDEuMzk1LjYyNCAxLjM5NSAxLjM5NXMtLjYyNCAxLjM5NS0xLjM5NSAxLjM5NWExLjM5MyAxLjM5MyAwIDAgMS0xLjM5NS0xLjM5NWMwLS43NzEuNjI0LTEuMzk1IDEuMzk1LTEuMzk1eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik0zMi4xMTUgNDcuODMzYzguMTI0IDAgNy42MTctMy41MjMgNy42MTctMy41MjNsLS4wMS0zLjY1SDMxLjk3di0xLjA5NWgxMC44MzJTNDggNDAuMTU1IDQ4IDMxLjk1OGMwLTguMTk3LTQuNTM3LTcuOTA2LTQuNTM3LTcuOTA2aC0yLjcwOHYzLjgwM3MuMTQ2IDQuNTM3LTQuNDY1IDQuNTM3aC03LjY4OHMtNC4zMi0uMDctNC4zMiA0LjE3NXY3LjAxOXMtLjY1NiA0LjI0NyA3LjgzMyA0LjI0N3ptNC4yNzUtMi40NTRhMS4zOTMgMS4zOTMgMCAwIDEtMS4zOTUtMS4zOTVjMC0uNzcuNjI0LTEuMzk0IDEuMzk1LTEuMzk0czEuMzk1LjYyMyAxLjM5NSAxLjM5NGMwIC43NzItLjYyNCAxLjM5NS0xLjM5NSAxLjM5NXoiIGZpbGw9InVybCgjYikiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxOS4wNzUiIHkxPSIxOC43ODIiIHgyPSIzNC44OTgiIHkyPSIzNC42NTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMzg3RUI4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzY2OTk0Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIyOC44MDkiIHkxPSIyOC44ODIiIHgyPSI0NS44MDMiIHkyPSI0NS4xNjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZFMDUyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZDMzMxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+",
        Persentage: 90
    },
    {
        Title: "Javascript",
        Image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiIGJhc2VQcm9maWxlPSJiYXNpYyI+PHBhdGggZmlsbD0iI2Y3ZGYxZSIgZD0iTTYsNDJWNmgzNnYzNkg2eiIvPjxwYXRoIGZpbGw9IiMwMDAwMDEiIGQ9Ik0yOS41MzgsMzIuOTQ3YzAuNjkyLDEuMTI0LDEuNDQ0LDIuMjAxLDMuMDM3LDIuMjAxYzEuMzM4LDAsMi4wNC0wLjY2NSwyLjA0LTEuNTg1IGMwLTEuMTAxLTAuNzI2LTEuNDkyLTIuMTk4LTIuMTMzbC0wLjgwNy0wLjM0NGMtMi4zMjktMC45ODgtMy44NzgtMi4yMjYtMy44NzgtNC44NDFjMC0yLjQxLDEuODQ1LTQuMjQ0LDQuNzI4LTQuMjQ0IGMyLjA1MywwLDMuNTI4LDAuNzExLDQuNTkyLDIuNTczbC0yLjUxNCwxLjYwN2MtMC41NTMtMC45ODgtMS4xNTEtMS4zNzctMi4wNzgtMS4zNzdjLTAuOTQ2LDAtMS41NDUsMC41OTctMS41NDUsMS4zNzcgYzAsMC45NjQsMC42LDEuMzU0LDEuOTg1LDEuOTUxbDAuODA3LDAuMzQ0QzM2LjQ1MiwyOS42NDUsMzgsMzAuODM5LDM4LDMzLjUyM0MzOCwzNi40MTUsMzUuNzE2LDM4LDMyLjY1LDM4IGMtMi45OTksMC00LjcwMi0xLjUwNS01LjY1LTMuMzY4TDI5LjUzOCwzMi45NDd6IE0xNy45NTIsMzMuMDI5YzAuNTA2LDAuOTA2LDEuMjc1LDEuNjAzLDIuMzgxLDEuNjAzIGMxLjA1OCwwLDEuNjY3LTAuNDE4LDEuNjY3LTIuMDQzVjIyaDMuMzMzdjExLjEwMWMwLDMuMzY3LTEuOTUzLDQuODk5LTQuODA1LDQuODk5Yy0yLjU3NywwLTQuNDM3LTEuNzQ2LTUuMTk1LTMuMzY4IEwxNy45NTIsMzMuMDI5eiIvPjwvc3ZnPg==",
        Persentage: 80
    }, {
        Title: "Php",
        Image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgaGVpZ2h0PSIzODMuNTk3NSIgaWQ9InN2ZzM0MzAiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDcxMS4yMDEyMyAzODMuNTk3NSIgd2lkdGg9IjcxMS4yMDEyMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHRpdGxlIGlkPSJ0aXRsZTM1MTAiPk9mZmljaWFsIFBIUCBMb2dvPC90aXRsZT4KICA8bWV0YWRhdGEgaWQ9Im1ldGFkYXRhMzQzNiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgICAgICA8ZGM6dGl0bGU+T2ZmaWNpYWwgUEhQIExvZ288L2RjOnRpdGxlPgogICAgICAgIDxkYzpjcmVhdG9yPgogICAgICAgICAgPGNjOkFnZW50PgogICAgICAgICAgICA8ZGM6dGl0bGU+Q29saW4gVmllYnJvY2s8L2RjOnRpdGxlPgogICAgICAgICAgPC9jYzpBZ2VudD4KICAgICAgICA8L2RjOmNyZWF0b3I+CiAgICAgICAgPGRjOmRlc2NyaXB0aW9uLz4KICAgICAgICA8ZGM6Y29udHJpYnV0b3I+CiAgICAgICAgICA8Y2M6QWdlbnQ+CiAgICAgICAgICAgIDxkYzp0aXRsZS8+CiAgICAgICAgICA8L2NjOkFnZW50PgogICAgICAgIDwvZGM6Y29udHJpYnV0b3I+CiAgICAgICAgPGNjOmxpY2Vuc2UgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvIi8+CiAgICAgICAgPGRjOnJpZ2h0cz4KICAgICAgICAgIDxjYzpBZ2VudD4KICAgICAgICAgICAgPGRjOnRpdGxlPkNvcHlyaWdodCBDb2xpbiBWaWVicm9jayAxOTk3IC0gQWxsIHJpZ2h0cyByZXNlcnZlZC48L2RjOnRpdGxlPgogICAgICAgICAgPC9jYzpBZ2VudD4KICAgICAgICA8L2RjOnJpZ2h0cz4KICAgICAgICA8ZGM6ZGF0ZT4xOTk3PC9kYzpkYXRlPgogICAgICA8L2NjOldvcms+CiAgICAgIDxjYzpMaWNlbnNlIHJkZjphYm91dD0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLyI+CiAgICAgICAgPGNjOnBlcm1pdHMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNSZXByb2R1Y3Rpb24iLz4KICAgICAgICA8Y2M6cGVybWl0cyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0Rpc3RyaWJ1dGlvbiIvPgogICAgICAgIDxjYzpyZXF1aXJlcyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI05vdGljZSIvPgogICAgICAgIDxjYzpyZXF1aXJlcyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0F0dHJpYnV0aW9uIi8+CiAgICAgICAgPGNjOnBlcm1pdHMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNEZXJpdmF0aXZlV29ya3MiLz4KICAgICAgICA8Y2M6cmVxdWlyZXMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNTaGFyZUFsaWtlIi8+CiAgICAgIDwvY2M6TGljZW5zZT4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzIGlkPSJkZWZzMzQzNCI+CiAgICA8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjbGlwUGF0aDM0NDQiPgogICAgICA8cGF0aCBkPSJNIDExLjUyLDE2MiBDIDExLjUyLDgxLjY3NyAxMzUuMzA3LDE2LjU2MSAyODgsMTYuNTYxIGwgMCwwIGMgMTUyLjY5MywwIDI3Ni40ODEsNjUuMTE2IDI3Ni40ODEsMTQ1LjQzOSBsIDAsMCBjIDAsODAuMzIyIC0xMjMuNzg4LDE0NS40MzkgLTI3Ni40ODEsMTQ1LjQzOSBsIDAsMCBDIDEzNS4zMDcsMzA3LjQzOSAxMS41MiwyNDIuMzIyIDExLjUyLDE2MiIgaWQ9InBhdGgzNDQ2Ii8+CiAgICA8L2NsaXBQYXRoPgogICAgPHJhZGlhbEdyYWRpZW50IGN4PSIwIiBjeT0iMCIgZng9IjAiIGZ5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDM2My4wNTc4OSwwLDAsLTM2My4wNTc4OSwxNzcuNTIwMDIsMjU2LjMwNzEzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJyYWRpYWxHcmFkaWVudDM0NTIiIHI9IjEiIHNwcmVhZE1ldGhvZD0icGFkIj4KICAgICAgPHN0b3AgaWQ9InN0b3AzNDU0IiBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNhZWIyZDUiLz4KICAgICAgPHN0b3AgaWQ9InN0b3AzNDU2IiBvZmZzZXQ9IjAuMyIgc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2FlYjJkNSIvPgogICAgICA8c3RvcCBpZD0ic3RvcDM0NTgiIG9mZnNldD0iMC43NSIgc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6IzQ4NGM4OSIvPgogICAgICA8c3RvcCBpZD0ic3RvcDM0NjAiIG9mZnNldD0iMSIgc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6IzQ4NGM4OSIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMzQ2OCI+CiAgICAgIDxwYXRoIGQ9Ik0gMCwzMjQgNTc2LDMyNCA1NzYsMCAwLDAgMCwzMjQgWiIgaWQ9InBhdGgzNDcwIi8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgzNDgwIj4KICAgICAgPHBhdGggZD0iTSAwLDMyNCA1NzYsMzI0IDU3NiwwIDAsMCAwLDMyNCBaIiBpZD0icGF0aDM0ODIiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGlkPSJnMzQzOCIgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTQuNCwzOTQuMjk4NzUpIj4KICAgIDxnIGlkPSJnMzQ0MCI+CiAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDM0NDQpIiBpZD0iZzM0NDIiPgogICAgICAgIDxnIGlkPSJnMzQ0OCI+CiAgICAgICAgICA8ZyBpZD0iZzM0NTAiPgogICAgICAgICAgICA8cGF0aCBkPSJNIDExLjUyLDE2MiBDIDExLjUyLDgxLjY3NyAxMzUuMzA3LDE2LjU2MSAyODgsMTYuNTYxIGwgMCwwIGMgMTUyLjY5MywwIDI3Ni40ODEsNjUuMTE2IDI3Ni40ODEsMTQ1LjQzOSBsIDAsMCBjIDAsODAuMzIyIC0xMjMuNzg4LDE0NS40MzkgLTI3Ni40ODEsMTQ1LjQzOSBsIDAsMCBDIDEzNS4zMDcsMzA3LjQzOSAxMS41MiwyNDIuMzIyIDExLjUyLDE2MiIgaWQ9InBhdGgzNDYyIiBzdHlsZT0iZmlsbDp1cmwoI3JhZGlhbEdyYWRpZW50MzQ1Mik7c3Ryb2tlOm5vbmUiLz4KICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIGlkPSJnMzQ2NCI+CiAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDM0NjgpIiBpZD0iZzM0NjYiPgogICAgICAgIDxnIGlkPSJnMzQ3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg4LDI3LjM1OTQpIj4KICAgICAgICAgIDxwYXRoIGQ9Ik0gMCwwIEMgMTQ2LjcyOSwwIDI2NS42OCw2MC4yODEgMjY1LjY4LDEzNC42NDEgMjY1LjY4LDIwOSAxNDYuNzI5LDI2OS4yODIgMCwyNjkuMjgyIC0xNDYuNzI5LDI2OS4yODIgLTI2NS42OCwyMDkgLTI2NS42OCwxMzQuNjQxIC0yNjUuNjgsNjAuMjgxIC0xNDYuNzI5LDAgMCwwIiBpZD0icGF0aDM0NzQiIHN0eWxlPSJmaWxsOiM3NzdiYjM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIGlkPSJnMzQ3NiI+CiAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDM0ODApIiBpZD0iZzM0NzgiPgogICAgICAgIDxnIGlkPSJnMzQ4NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYxLjczNDQsMTQ1LjMwNjYpIj4KICAgICAgICAgIDxwYXRoIGQ9Im0gMCwwIGMgMTIuMDY1LDAgMjEuMDcyLDIuMjI1IDI2Ljc3MSw2LjYxMSA1LjYzOCw0LjM0MSA5LjUzMiwxMS44NjIgMTEuNTczLDIyLjM1MyAxLjkwMyw5LjgwNiAxLjE3OCwxNi42NTMgLTIuMTU0LDIwLjM0OCBDIDMyLjc4Myw1My4wODYgMjUuNDE3LDU1IDE0LjI5Nyw1NSBMIC00Ljk4NCw1NSAtMTUuNjczLDAgMCwwIFogbSAtNjMuMDYzLC02Ny43NSBjIC0wLjg5NSwwIC0xLjc0NSwwLjQgLTIuMzE0LDEuMDkyIC0wLjU3LDAuNjkxIC0wLjgwMSwxLjYwMSAtMC42MywyLjQ4IEwgLTM3LjY3OSw4MS41NzMgQyAtMzcuNDA1LDgyLjk4MiAtMzYuMTcsODQgLTM0LjczNCw4NCBMIDI2LjMyLDg0IEMgNDUuNTA4LDg0IDU5Ljc5LDc4Ljc5IDY4Ljc2Nyw2OC41MTMgNzcuNzkyLDU4LjE4MiA4MC41NzksNDMuNzQxIDc3LjA1LDI1LjU5MiA3NS42MTQsMTguMTk4IDczLjE0NCwxMS4zMzEgNjkuNzA5LDUuMTgzIDY2LjI3LC0wLjk3MiA2MS43MjUsLTYuNjY3IDU2LjE5OCwtMTEuNzQ3IDQ5LjU4MiwtMTcuOTM5IDQyLjA5NCwtMjIuNDI5IDMzLjk2MiwtMjUuMDcxIDI1Ljk1OSwtMjcuNjc4IDE1LjY4MSwtMjkgMy40MTQsLTI5IGwgLTI0LjcyMiwwIC03LjA2LC0zNi4zMjIgYyAtMC4yNzQsLTEuNDEgLTEuNTA4LC0yLjQyOCAtMi45NDQsLTIuNDI4IGwgLTMxLjc1MSwwIHoiIGlkPSJwYXRoMzQ4NiIgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iZzM0ODgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1OS4yMjM2LDE5Ny4zMDcxKSI+CiAgICAgICAgICA8cGF0aCBkPSJtIDAsMCAxNi44MDgsMCBjIDEzLjQyMSwwIDE4LjA4MywtMi45NDUgMTkuNjY3LC00LjcgMi42MjgsLTIuOTE0IDMuMTI0LC05LjA1OCAxLjQzNSwtMTcuNzY3IEMgMzYuMDEyLC0zMi4yMTcgMzIuNDk0LC0zOS4xMyAyNy40NTIsLTQzLjAxMiAyMi4yOSwtNDYuOTg2IDEzLjg5OCwtNDkgMi41MTEsLTQ5IEwgLTkuNTIzLC00OSAwLDAgWiBtIDI4LjgzMSwzNSAtNjEuMDU1LDAgYyAtMi44NzIsMCAtNS4zNDEsLTIuMDM2IC01Ljg4OSwtNC44NTUgbCAtMjguMzI4LC0xNDUuNzUxIGMgLTAuMzQyLC0xLjc1OSAwLjEyLC0zLjU3OCAxLjI1OSwtNC45NjEgMS4xNCwtMS4zODMgMi44MzgsLTIuMTgzIDQuNjMsLTIuMTgzIGwgMzEuNzUsMCBjIDIuODczLDAgNS4zNDIsMi4wMzYgNS44OSw0Ljg1NSBsIDYuNTg4LDMzLjg5NSAyMi4yNDksMCBjIDEyLjU4MiwwIDIzLjE3NCwxLjM3MiAzMS40NzksNC4wNzcgOC41NDEsMi43NzUgMTYuMzk5LDcuNDggMjMuMzU0LDEzLjk4NCA1Ljc1Miw1LjI5MiAxMC40OSwxMS4yMzIgMTQuMDgsMTcuNjU3IDMuNTkxLDYuNDI3IDYuMTcxLDEzLjU5NCA3LjY2OCwyMS4zMDIgMy43MTUsMTkuMTA0IDAuNjk3LDM0LjQwMiAtOC45NjksNDUuNDY2IEMgNjMuOTY1LDI5LjQ0NCA0OC45MjMsMzUgMjguODMxLDM1IG0gLTQ1LjYzMywtOTAgMTkuMzEzLDAgYyAxMi44MDEsMCAyMi4zMzYsMi40MTEgMjguNjAxLDcuMjM0IDYuMjY2LDQuODI0IDEwLjQ5MiwxMi44NzUgMTIuNjg4LDI0LjE1NyAyLjEwMSwxMC44MzIgMS4xNDQsMTguNDc2IC0yLjg3MSwyMi45MjkgQyAzNi45MDksMy43NzMgMjguODcsNiAxNi44MDgsNiBMIC00Ljk0Niw2IC0xNi44MDIsLTU1IE0gMjguODMxLDI5IEMgNDcuMTk4LDI5IDYwLjU5NywyNC4xOCA2OS4wMTksMTQuNTM5IDc3LjQ0LDQuODk4IDc5Ljk3NiwtOC41NTkgNzYuNjE2LC0yNS44MzYgNzUuMjMzLC0zMi45NTMgNzIuODk0LC0zOS40NiA2OS42MDEsLTQ1LjM1NSA2Ni4zMDQsLTUxLjI1NCA2MS45OTksLTU2LjY0OCA1Ni42NzksLTYxLjUzOSA1MC4zMzksLTY3LjQ3MiA0My4yOTYsLTcxLjcgMzUuNTQ2LC03NC4yMTggMjcuNzk2LC03Ni43NDMgMTcuOTI1LC03OCA1LjkyNSwtNzggbCAtMjcuMTk2LDAgLTcuNTMxLC0zOC43NSAtMzEuNzUsMCAyOC4zMjgsMTQ1Ljc1IDYxLjA1NSwwIiBpZD0icGF0aDM0OTAiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9ImczNDkyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMTEuNTgzLDExNi4zMDY2KSI+CiAgICAgICAgICA8cGF0aCBkPSJtIDAsMCBjIC0wLjg5NiwwIC0xLjc0NSwwLjQgLTIuMzE0LDEuMDkyIC0wLjU3MSwwLjY5MSAtMC44MDIsMS42IC0wLjYzMSwyLjQ4IEwgOS41ODYsNjguMDYxIEMgMTAuNzc4LDc0LjE5NCAxMC40ODQsNzguNTk2IDguNzU5LDgwLjQ1NiA3LjcwMyw4MS41OTMgNC41MzEsODMuNSAtNC44NDgsODMuNSBMIC0yNy41NSw4My41IC00My4zMDUsMi40MjggQyAtNDMuNTc5LDEuMDE4IC00NC44MTQsMCAtNDYuMjUsMCBsIC0zMS41LDAgYyAtMC44OTYsMCAtMS43NDUsMC40IC0yLjMxNSwxLjA5MiAtMC41NywwLjY5MSAtMC44MDEsMS42MDEgLTAuNjMsMi40OCBsIDI4LjMyOCwxNDUuNzUxIGMgMC4yNzQsMS40MDkgMS41MDksMi40MjcgMi45NDUsMi40MjcgbCAzMS41LDAgYyAwLjg5NiwwIDEuNzQ1LC0wLjQgMi4zMTUsLTEuMDkxIDAuNTcsLTAuNjkyIDAuODAxLC0xLjYwMSAwLjYzLC0yLjQ4MSBMIC0yMS44MTMsMTEzIDIuNjA5LDExMyBjIDE4LjYwNSwwIDMxLjIyMSwtMy4yOCAzOC41NjksLTEwLjAyOCA3LjQ5LC02Ljg4NCA5LjgyNywtMTcuODkxIDYuOTQ3LC0zMi43MTkgTCAzNC45NDUsMi40MjggQyAzNC42NzEsMS4wMTggMzMuNDM3LDAgMzIsMCBMIDAsMCBaIiBpZD0icGF0aDM0OTQiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9ImczNDk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTMuNjYxMSwyNzEuMDU3MSkiPgogICAgICAgICAgPHBhdGggZD0ibSAwLDAgLTMxLjUsMCBjIC0yLjg3MywwIC01LjM0MiwtMi4wMzYgLTUuODksLTQuODU1IGwgLTI4LjMyOCwtMTQ1Ljc1MSBjIC0wLjM0MiwtMS43NTkgMC4xMiwtMy41NzggMS4yNiwtNC45NjEgMS4xNCwtMS4zODMgMi44MzgsLTIuMTgzIDQuNjMsLTIuMTgzIGwgMzEuNSwwIGMgMi44NzIsMCA1LjM0MiwyLjAzNiA1Ljg5LDQuODU1IGwgMTUuMjgzLDc4LjY0NSAyMC4yMjksMCBjIDkuMzYzLDAgMTEuMzI4LC0yIDExLjQwNywtMi4wODYgMC41NjgsLTAuNjExIDEuMzE1LC0zLjQ0MSAwLjA4MiwtOS43ODEgbCAtMTIuNTMxLC02NC40ODkgYyAtMC4zNDIsLTEuNzU5IDAuMTIsLTMuNTc4IDEuMjYsLTQuOTYxIDEuMTQsLTEuMzgzIDIuODM4LC0yLjE4MyA0LjYzLC0yLjE4MyBsIDMyLDAgYyAyLjg3MiwwIDUuMzQyLDIuMDM2IDUuODksNC44NTUgbCAxMy4xNzksNjcuODI1IGMgMy4wOTMsMTUuOTIxIDAuNDQ3LDI3Ljg2NCAtNy44NjEsMzUuNSAtNy45MjgsNy4yODEgLTIxLjIwOCwxMC44MiAtNDAuNTk5LDEwLjgyIGwgLTIwLjc4NCwwIDYuMTQzLDMxLjYwNSBDIDYuMjMxLC01LjM4NiA1Ljc3LC0zLjU2NiA0LjYzLC0yLjE4NCAzLjQ5LC0wLjgwMSAxLjc5MiwwIDAsMCBtIDAsLTYgLTcuNTMxLC0zOC43NSAyOC4wNjIsMCBjIDE3LjY1NywwIDI5LjgzNiwtMy4wODIgMzYuNTM5LC05LjIzOCA2LjcwMywtNi4xNiA4LjcxMSwtMTYuMTQxIDYuMDMyLC0yOS45MzggbCAtMTMuMTgsLTY3LjgyNCAtMzIsMCAxMi41MzEsNjQuNDg4IGMgMS40MjYsNy4zMzYgMC45MDIsMTIuMzQgLTEuNTc0LDE1LjAwOCAtMi40NzcsMi42NjggLTcuNzQ2LDQuMDA0IC0xNS44MDUsNC4wMDQgbCAtMjUuMTc2LDAgLTE2LjIyNiwtODMuNSAtMzEuNSwwIEwgLTMxLjUsLTYgMCwtNiIgaWQ9InBhdGgzNDk4IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJnMzUwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDA5LjU0OTgsMTQ1LjMwNjYpIj4KICAgICAgICAgIDxwYXRoIGQ9Im0gMCwwIGMgMTIuMDY1LDAgMjEuMDcyLDIuMjI1IDI2Ljc3MSw2LjYxMSA1LjYzOCw0LjM0IDkuNTMyLDExLjg2MSAxMS41NzQsMjIuMzUzIDEuOTAzLDkuODA2IDEuMTc4LDE2LjY1MyAtMi4xNTUsMjAuMzQ4IEMgMzIuNzgzLDUzLjA4NiAyNS40MTcsNTUgMTQuMjk3LDU1IEwgLTQuOTg0LDU1IC0xNS42NzMsMCAwLDAgWiBtIC02My4wNjIsLTY3Ljc1IGMgLTAuODk1LDAgLTEuNzQ1LDAuNCAtMi4zMTQsMS4wOTIgLTAuNTcsMC42OTEgLTAuODAyLDEuNjAxIC0wLjYzMSwyLjQ4IEwgLTM3LjY3OSw4MS41NzMgQyAtMzcuNDA0LDgyLjk4MiAtMzYuMTcsODQgLTM0LjczMyw4NCBMIDI2LjMyLDg0IEMgNDUuNTA5LDg0IDU5Ljc5LDc4Ljc5IDY4Ljc2OCw2OC41MTMgNzcuNzkzLDU4LjE4MyA4MC41NzksNDMuNzQyIDc3LjA1MSwyNS41OTIgNzUuNjEzLDE4LjE5OCA3My4xNDQsMTEuMzMxIDY5LjcwOSw1LjE4MyA2Ni4yNywtMC45NzIgNjEuNzI1LC02LjY2NyA1Ni4xOTgsLTExLjc0NyA0OS41ODIsLTE3LjkzOSA0Mi4wOTQsLTIyLjQyOSAzMy45NjIsLTI1LjA3MSAyNS45NTksLTI3LjY3OCAxNS42ODEsLTI5IDMuNDE0LC0yOSBsIC0yNC43MjMsMCAtNy4wNTcsLTM2LjMyMiBjIC0wLjI3NSwtMS40MSAtMS41MDksLTIuNDI4IC0yLjk0NiwtMi40MjggbCAtMzEuNzUsMCB6IiBpZD0icGF0aDM1MDIiIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9ImczNTA0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDcuMDM5MSwxOTcuMzA3MSkiPgogICAgICAgICAgPHBhdGggZD0iTSAwLDAgMTYuODA4LDAgQyAzMC4yMjksMCAzNC44OTEsLTIuOTQ1IDM2LjQ3NSwtNC43IDM5LjEwNCwtNy42MTQgMzkuNiwtMTMuNzU4IDM3LjkxLC0yMi40NjYgMzYuMDEyLC0zMi4yMTcgMzIuNDkzLC0zOS4xMyAyNy40NTIsLTQzLjAxMiAyMi4yOSwtNDYuOTg2IDEzLjg5OCwtNDkgMi41MTEsLTQ5IEwgLTkuNTIyLC00OSAwLDAgWiBtIDI4LjgzMSwzNSAtNjEuMDU0LDAgYyAtMi44NzIsMCAtNS4zNDEsLTIuMDM2IC01Ljg4OSwtNC44NTUgTCAtNjYuNDQsLTExNS42MDYgYyAtMC4zNDIsLTEuNzU5IDAuMTIsLTMuNTc4IDEuMjU5LC00Ljk2MSAxLjE0LC0xLjM4MyAyLjgzOCwtMi4xODMgNC42MywtMi4xODMgbCAzMS43NSwwIGMgMi44NzIsMCA1LjM0MiwyLjAzNiA1Ljg5LDQuODU1IGwgNi41ODcsMzMuODk1IDIyLjI0OSwwIGMgMTIuNTgyLDAgMjMuMTc0LDEuMzcyIDMxLjQ3OSw0LjA3NyA4LjU0MSwyLjc3NSAxNi40MDEsNy40ODEgMjMuMzU2LDEzLjk4NiA1Ljc1Miw1LjI5MSAxMC40ODgsMTEuMjMgMTQuMDc4LDE3LjY1NSAzLjU5MSw2LjQyNyA2LjE3MSwxMy41OTQgNy42NjgsMjEuMzAyIDMuNzE1LDE5LjEwNSAwLjY5NywzNC40MDMgLTguOTY5LDQ1LjQ2NyBDIDYzLjk2NSwyOS40NDQgNDguOTI0LDM1IDI4LjgzMSwzNSBtIC00NS42MzIsLTkwIDE5LjMxMiwwIGMgMTIuODAxLDAgMjIuMzM2LDIuNDExIDI4LjYwMSw3LjIzNCA2LjI2Nyw0LjgyNCAxMC40OTIsMTIuODc1IDEyLjY4OCwyNC4xNTcgMi4xMDIsMTAuODMyIDEuMTQ1LDE4LjQ3NiAtMi44NzEsMjIuOTI5IEMgMzYuOTA5LDMuNzczIDI4Ljg3LDYgMTYuODA4LDYgTCAtNC45NDYsNiAtMTYuODAxLC01NSBNIDI4LjgzMSwyOSBDIDQ3LjE5OCwyOSA2MC41OTcsMjQuMTggNjkuMDE5LDE0LjUzOSA3Ny40NDEsNC44OTggNzkuOTc2LC04LjU1OSA3Ni42MTYsLTI1LjgzNiA3NS4yMzMsLTMyLjk1MyA3Mi44OTQsLTM5LjQ2IDY5LjYwMSwtNDUuMzU1IDY2LjMwNCwtNTEuMjU0IDYxLjk5OSwtNTYuNjQ4IDU2LjY3OSwtNjEuNTM5IDUwLjMzOSwtNjcuNDcyIDQzLjI5NiwtNzEuNyAzNS41NDYsLTc0LjIxOCAyNy43OTYsLTc2Ljc0MyAxNy45MjUsLTc4IDUuOTI1LC03OCBsIC0yNy4xOTYsMCAtNy41MywtMzguNzUgLTMxLjc1LDAgMjguMzI4LDE0NS43NSA2MS4wNTQsMCIgaWQ9InBhdGgzNTA2IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIi8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=", Persentage: 70
    },
    {
        Title: "Sql",
        Image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAyNS42IDI1LjYiIHdpZHRoPSI2NCI+PHN0eWxlPjwhW0NEQVRBWy5Ce3N0cm9rZS1saW5lY2FwOnJvdW5kfS5De3N0cm9rZS1saW5lam9pbjpyb3VuZH0uRHtzdHJva2UtbGluZWpvaW46bWl0ZXJ9LkV7c3Ryb2tlLXdpZHRoOi43MTZ9XV0+PC9zdHlsZT48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiPjxwYXRoIGQ9Ik0xOC45ODMgMTguNjM2Yy4xNjMtMS4zNTcuMTE0LTEuNTU1IDEuMTI0LTEuMzM2bC4yNTcuMDIzYy43NzcuMDM1IDEuNzkzLS4xMjUgMi40LS40MDIgMS4yODUtLjU5NiAyLjA0Ny0xLjU5Mi43OC0xLjMzLTIuODkuNTk2LTMuMS0uMzgzLTMuMS0uMzgzIDMuMDUzLTQuNTMgNC4zMy0xMC4yOCAzLjIyNy0xMS42ODctMy4wMDQtMy44NC04LjIwNS0yLjAyNC04LjI5Mi0xLjk3NmwtLjAyOC4wMDVjLS41Ny0uMTItMS4yLS4xOS0xLjkzLS4yLTEuMzA4LS4wMi0yLjMuMzQzLTMuMDU0LjkxNCAwIDAtOS4yNzctMy44MjItOC44NDYgNC44MDcuMDkyIDEuODM2IDIuNjMgMTMuOSA1LjY2IDEwLjI1QzguMjkgMTUuOTg3IDkuMzYgMTQuODYgOS4zNiAxNC44NmMuNTMuMzUzIDEuMTY3LjUzMyAxLjgzNC40NjhsLjA1Mi0uMDQ0YTIuMDEgMi4wMSAwIDAgMCAuMDIxLjUxOGMtLjc4Ljg3Mi0uNTUgMS4wMjUtMi4xMSAxLjM0Ni0xLjU3OC4zMjUtLjY1LjkwNC0uMDQ2IDEuMDU2LjczNC4xODQgMi40MzIuNDQ0IDMuNTgtMS4xNjJsLS4wNDYuMTgzYy4zMDYuMjQ1LjI4NSAxLjc2LjMzIDIuODQycy4xMTYgMi4wOTMuMzM3IDIuNjg4LjQ4IDIuMTMgMi41MyAxLjdjMS43MTMtLjM2NyAzLjAyMy0uODk2IDMuMTQzLTUuODEiIGZpbGw9IiMwMDAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMi4xNDkiIGNsYXNzPSJEIi8+PHBhdGggZD0iTTIzLjUzNSAxNS42Yy0yLjg5LjU5Ni0zLjEtLjM4My0zLjEtLjM4MyAzLjA1My00LjUzIDQuMzMtMTAuMjggMy4yMjgtMTEuNjg3LTMuMDA0LTMuODQtOC4yMDUtMi4wMjMtOC4yOTItMS45NzZsLS4wMjguMDA1YTEwLjMxIDEwLjMxIDAgMCAwLTEuOTI5LS4yMDFjLTEuMzA4LS4wMi0yLjMuMzQzLTMuMDU0LjkxNCAwIDAtOS4yNzgtMy44MjItOC44NDYgNC44MDcuMDkyIDEuODM2IDIuNjMgMTMuOSA1LjY2IDEwLjI1QzguMjkgMTUuOTg3IDkuMzYgMTQuODYgOS4zNiAxNC44NmMuNTMuMzUzIDEuMTY3LjUzMyAxLjgzNC40NjhsLjA1Mi0uMDQ0YTIuMDIgMi4wMiAwIDAgMCAuMDIxLjUxOGMtLjc4Ljg3Mi0uNTUgMS4wMjUtMi4xMSAxLjM0Ni0xLjU3OC4zMjUtLjY1LjkwNC0uMDQ2IDEuMDU2LjczNC4xODQgMi40MzIuNDQ0IDMuNTgtMS4xNjJsLS4wNDYuMTgzYy4zMDYuMjQ1LjUyIDEuNTkzLjQ4NCAyLjgxNXMtLjA2IDIuMDYuMTggMi43MTYuNDggMi4xMyAyLjUzIDEuN2MxLjcxMy0uMzY3IDIuNi0xLjMyIDIuNzI1LTIuOTA2LjA4OC0xLjEyOC4yODYtLjk2Mi4zLTEuOTdsLjE2LS40NzhjLjE4My0xLjUzLjAzLTIuMDIzIDEuMDg1LTEuNzkzbC4yNTcuMDIzYy43NzcuMDM1IDEuNzk0LS4xMjUgMi4zOS0uNDAyIDEuMjg1LS41OTYgMi4wNDctMS41OTIuNzgtMS4zM3oiIGZpbGw9IiMzMzY3OTEiIHN0cm9rZT0ibm9uZSIvPjxnIGNsYXNzPSJFIj48ZyBjbGFzcz0iQiI+PHBhdGggZD0iTTEyLjgxNCAxNi40NjdjLS4wOCAyLjg0Ni4wMiA1LjcxMi4yOTggNi40cy44NzUgMi4wNSAyLjkyNiAxLjYxMmMxLjcxMy0uMzY3IDIuMzM3LTEuMDc4IDIuNjA3LTIuNjQ3bC42MzMtNS4wMTdNMTAuMzU2IDIuMlMxLjA3Mi0xLjU5NiAxLjUwNCA3LjAzM2MuMDkyIDEuODM2IDIuNjMgMTMuOSA1LjY2IDEwLjI1QzguMjcgMTUuOTUgOS4yNyAxNC45MDcgOS4yNyAxNC45MDdtNi4xLTEzLjRjLS4zMi4xIDUuMTY0LTIuMDA1IDguMjgyIDEuOTc4IDEuMSAxLjQwNy0uMTc1IDcuMTU3LTMuMjI4IDExLjY4NyIgY2xhc3M9IkMiLz48cGF0aCBkPSJNMjAuNDI1IDE1LjE3cy4yLjk4IDMuMS4zODJjMS4yNjctLjI2Mi41MDQuNzM0LS43OCAxLjMzLTEuMDU0LjQ5LTMuNDE4LjYxNS0zLjQ1Ny0uMDYtLjEtMS43NDUgMS4yNDQtMS4yMTUgMS4xNDctMS42NTItLjA4OC0uMzk0LS42OS0uNzgtMS4wODYtMS43NDQtLjM0Ny0uODQtNC43Ni03LjI5IDEuMjI0LTYuMzMzLjIyLS4wNDUtMS41Ni01LjctNy4xNi01Ljc4MlM3Ljk5IDguMTk2IDcuOTkgOC4xOTYiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiLz48L2c+PGcgY2xhc3M9IkMiPjxwYXRoIGQ9Ik0xMS4yNDcgMTUuNzY4Yy0uNzguODcyLS41NSAxLjAyNS0yLjExIDEuMzQ2LTEuNTc4LjMyNS0uNjUuOTA0LS4wNDYgMS4wNTYuNzM0LjE4NCAyLjQzMi40NDQgMy41OC0xLjE2My4zNS0uNDktLjAwMi0xLjI3LS40ODItMS40NjgtLjIzMi0uMDk2LS41NDItLjIxNi0uOTQuMjN6Ii8+PHBhdGggZD0iTTExLjE5NiAxNS43NTNjLS4wOC0uNTEzLjE2OC0xLjEyMi40MzMtMS44MzYuMzk4LTEuMDcgMS4zMTYtMi4xNC41ODItNS41MzctLjU0Ny0yLjUzLTQuMjItLjUyNy00LjIyLS4xODRzLjE2NiAxLjc0LS4wNiAzLjM2NWMtLjI5NyAyLjEyMiAxLjM1IDMuOTE2IDMuMjQ2IDMuNzMzIiBjbGFzcz0iQiIvPjwvZz48L2c+PGcgZmlsbD0iI2ZmZiIgY2xhc3M9IkQiPjxwYXRoIGQ9Ik0xMC4zMjIgOC4xNDVjLS4wMTcuMTE3LjIxNS40My41MTYuNDcycy41NTgtLjIwMi41NzUtLjMyLS4yMTUtLjI0Ni0uNTE2LS4yODgtLjU2LjAyLS41NzUuMTM2eiIgc3Ryb2tlLXdpZHRoPSIuMjM5Ii8+PHBhdGggZD0iTTE5LjQ4NiA3LjkwNmMuMDE2LjExNy0uMjE1LjQzLS41MTYuNDcycy0uNTYtLjIwMi0uNTc1LS4zMi4yMTUtLjI0Ni41MTYtLjI4OC41Ni4wMi41NzUuMTM2eiIgc3Ryb2tlLXdpZHRoPSIuMTE5Ii8+PC9nPjxwYXRoIGQ9Ik0yMC41NjIgNy4wOTVjLjA1LjkyLS4xOTggMS41NDUtLjIzIDIuNTI0LS4wNDYgMS40MjIuNjc4IDMuMDUtLjQxMyA0LjY4IiBjbGFzcz0iQiBDIEUiLz48L2c+PC9zdmc+",
        Persentage: 90
    },
    {
        Title: "C#",
        Image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjg4cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjg4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0yNTUuNTY5LDg0LjQ1MjM3NiBDMjU1LjU2Nyw3OS42MjIzNzYgMjU0LjUzNCw3NS4zNTQzNzYgMjUyLjQ0NSw3MS42OTEzNzYgQzI1MC4zOTMsNjguMDg5Mzc2IDI0Ny4zMiw2NS4wNzAzNzYgMjQzLjE5OCw2Mi42ODMzNzYgQzIwOS4xNzMsNDMuMDY0Mzc2IDE3NS4xMTUsMjMuNTA1Mzc2IDE0MS4xMDEsMy44NjYzNzYwNSBDMTMxLjkzMSwtMS40Mjc2MjM5NSAxMjMuMDQsLTEuMjM0NjIzOTUgMTEzLjkzOCw0LjEzNTM3NjA1IEMxMDAuMzk1LDEyLjEyMjM3NiAzMi41OSw1MC45NjkzNzYgMTIuMzg1LDYyLjY3MjM3NiBDNC4wNjQsNjcuNDg5Mzc2IDAuMDE1LDc0Ljg2MTM3NiAwLjAxMyw4NC40NDMzNzYgQzAsMTIzLjg5ODM3NiAwLjAxMywxNjMuMzUyMzc2IDAsMjAyLjgwODM3NiBDMCwyMDcuNTMyMzc2IDAuOTkxLDIxMS43MTczNzYgMi45ODgsMjE1LjMyNTM3NiBDNS4wNDEsMjE5LjAzNjM3NiA4LjE1NywyMjIuMTM4Mzc2IDEyLjM3NCwyMjQuNTc5Mzc2IEMzMi41OCwyMzYuMjgyMzc2IDEwMC4zOTQsMjc1LjEyNjM3NiAxMTMuOTM0LDI4My4xMTUzNzYgQzEyMy4wNCwyODguNDg4Mzc2IDEzMS45MzEsMjg4LjY4MDM3NiAxNDEuMTA0LDI4My4zODQzNzYgQzE3NS4xMTksMjYzLjc0NDM3NiAyMDkuMTc5LDI0NC4xODYzNzYgMjQzLjIwOSwyMjQuNTY3Mzc2IEMyNDcuNDI2LDIyMi4xMjczNzYgMjUwLjU0MiwyMTkuMDIzMzc2IDI1Mi41OTUsMjE1LjMxNTM3NiBDMjU0LjU4OSwyMTEuNzA3Mzc2IDI1NS41ODIsMjA3LjUyMjM3NiAyNTUuNTgyLDIwMi43OTczNzYgQzI1NS41ODIsMjAyLjc5NzM3NiAyNTUuNTgyLDEyMy45MDgzNzYgMjU1LjU2OSw4NC40NTIzNzYiIGZpbGw9IiNBMTc5REMiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjguMTgyLDE0My4yNDEzNzYgTDIuOTg4LDIxNS4zMjUzNzYgQzUuMDQxLDIxOS4wMzYzNzYgOC4xNTcsMjIyLjEzODM3NiAxMi4zNzQsMjI0LjU3OTM3NiBDMzIuNTgsMjM2LjI4MjM3NiAxMDAuMzk0LDI3NS4xMjYzNzYgMTEzLjkzNCwyODMuMTE1Mzc2IEMxMjMuMDQsMjg4LjQ4ODM3NiAxMzEuOTMxLDI4OC42ODAzNzYgMTQxLjEwNCwyODMuMzg0Mzc2IEMxNzUuMTE5LDI2My43NDQzNzYgMjA5LjE3OSwyNDQuMTg2Mzc2IDI0My4yMDksMjI0LjU2NzM3NiBDMjQ3LjQyNiwyMjIuMTI3Mzc2IDI1MC41NDIsMjE5LjAyMzM3NiAyNTIuNTk1LDIxNS4zMTUzNzYgTDEyOC4xODIsMTQzLjI0MTM3NiIgZmlsbD0iIzI4MDA2OCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTI1NS41NjksODQuNDUyMzc2IEMyNTUuNTY3LDc5LjYyMjM3NiAyNTQuNTM0LDc1LjM1NDM3NiAyNTIuNDQ1LDcxLjY5MTM3NiBMMTI4LjE4MiwxNDMuMjQxMzc2IEwyNTIuNTk1LDIxNS4zMTUzNzYgQzI1NC41ODksMjExLjcwNzM3NiAyNTUuNTgsMjA3LjUyMjM3NiAyNTUuNTgyLDIwMi43OTczNzYgQzI1NS41ODIsMjAyLjc5NzM3NiAyNTUuNTgyLDEyMy45MDgzNzYgMjU1LjU2OSw4NC40NTIzNzYiIGZpbGw9IiMzOTAwOTEiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yMDEuODkyMzI2LDExNi4yOTQwMDggTDIwMS44OTIzMjYsMTI5Ljc2NzY5MiBMMjE1LjM2NjAxLDEyOS43Njc2OTIgTDIxNS4zNjYwMSwxMTYuMjk0MDA4IEwyMjIuMTAyODUyLDExNi4yOTQwMDggTDIyMi4xMDI4NTIsMTI5Ljc2NzY5MiBMMjM1LjU3NjUzNywxMjkuNzY3NjkyIEwyMzUuNTc2NTM3LDEzNi41MDQ1MzQgTDIyMi4xMDI4NTIsMTM2LjUwNDUzNCBMMjIyLjEwMjg1MiwxNDkuOTc4MjE4IEwyMzUuNTc2NTM3LDE0OS45NzgyMTggTDIzNS41NzY1MzcsMTU2LjcxNTA2IEwyMjIuMTAyODUyLDE1Ni43MTUwNiBMMjIyLjEwMjg1MiwxNzAuMTg4NzQ0IEwyMTUuMzY2MDEsMTcwLjE4ODc0NCBMMjE1LjM2NjAxLDE1Ni43MTUwNiBMMjAxLjg5MjMyNiwxNTYuNzE1MDYgTDIwMS44OTIzMjYsMTcwLjE4ODc0NCBMMTk1LjE1NTQ4NCwxNzAuMTg4NzQ0IEwxOTUuMTU1NDg0LDE1Ni43MTUwNiBMMTgxLjY4MTgsMTU2LjcxNTA2IEwxODEuNjgxOCwxNDkuOTc4MjE4IEwxOTUuMTU1NDg0LDE0OS45NzgyMTggTDE5NS4xNTU0ODQsMTM2LjUwNDUzNCBMMTgxLjY4MTgsMTM2LjUwNDUzNCBMMTgxLjY4MTgsMTI5Ljc2NzY5MiBMMTk1LjE1NTQ4NCwxMjkuNzY3NjkyIEwxOTUuMTU1NDg0LDExNi4yOTQwMDggTDIwMS44OTIzMjYsMTE2LjI5NDAwOCBaIE0yMTUuMzY2MDEsMTM2LjUwNDUzNCBMMjAxLjg5MjMyNiwxMzYuNTA0NTM0IEwyMDEuODkyMzI2LDE0OS45NzgyMTggTDIxNS4zNjYwMSwxNDkuOTc4MjE4IEwyMTUuMzY2MDEsMTM2LjUwNDUzNCBaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEyOC40NTY3NTIsNDguNjI1ODc2IEMxNjMuNjAwNTIzLDQ4LjYyNTg3NiAxOTQuMjgzODg1LDY3LjcxMjE3NDEgMjEwLjcxODU2Miw5Ni4wODE5NDM1IEwyMTAuNTU4MTkyLDk1LjgwODg3NiBMMTY5LjIwOTYxNSwxMTkuNjE3MTU5IEMxNjEuMDYyOTU5LDEwNS44MjM1NTQgMTQ2LjEyODEzNiw5Ni41MTUwNzE3IDEyOC45OTYzODMsOTYuMzIzMzcyMiBMMTI4LjQ1Njc1Miw5Ni4zMjAzNTQ0IEMxMDIuMzMxMTc4LDk2LjMyMDM1NDQgODEuMTUwNjcwNSwxMTcuNDk5NzQzIDgxLjE1MDY3MDUsMTQzLjYyNTMxNiBDODEuMTUwNjcwNSwxNTIuMTY4OTMxIDgzLjQyODQ0NTMsMTYwLjE3NzUyIDg3LjM4OTY0NjksMTY3LjA5NDc5MiBDOTUuNTQzNzQ1LDE4MS4zMzAwNDUgMTEwLjg3MjU1NCwxOTAuOTMxMzk4IDEyOC40NTY3NTIsMTkwLjkzMTM5OCBDMTQ2LjE0OTUyMiwxOTAuOTMxMzk4IDE2MS41NjU2MzYsMTgxLjIwODA0MSAxNjkuNjc4MzIsMTY2LjgyMDU2MyBMMTY5LjQ4MTE5MiwxNjcuMTY1ODc2IEwyMTAuNzY3Njc4LDE5MS4wODM5MTMgQzE5NC41MTMyOCwyMTkuMjEzNDcgMTY0LjI1MDI3LDIzOC4yNDA4NjEgMTI5LjUxNDk3NywyMzguNjIwMTAyIEwxMjguNDU2NzUyLDIzOC42MjU4NzYgQzkzLjIwMjE3MDEsMjM4LjYyNTg3NiA2Mi40MzE1MDI4LDIxOS40MjIwNTIgNDYuMDM4MjM5OCwxOTAuOTAyMjk2IEMzOC4wMzUyNDcxLDE3Ni45NzkzMjcgMzMuNDU2MTkyMiwxNjAuODM3OTA3IDMzLjQ1NjE5MjIsMTQzLjYyNTMxNiBDMzMuNDU2MTkyMiw5MS4xNTkyNjM2IDc1Ljk4ODQ2MDQsNDguNjI1ODc2IDEyOC40NTY3NTIsNDguNjI1ODc2IFoiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=",
        Persentage: 85
    },
    {
        Title: "Html",
        Image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iLTUyLjUgMCAzNjEgMzYxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiPjxwYXRoIGQ9Ik0yNTUuNTU1IDcwLjc2NmwtMjMuMjQxIDI2MC4zNi0xMDQuNDcgMjguOTYyLTEwNC4xODItMjguOTIyTC40NDUgNzAuNzY2aDI1NS4xMXoiIGZpbGw9IiNFNDREMjYiLz48cGF0aCBkPSJNMTI4IDMzNy45NWw4NC40MTctMjMuNDAzIDE5Ljg2LTIyMi40OUgxMjhWMzM3Ljk1eiIgZmlsbD0iI0YxNjUyOSIvPjxwYXRoIGQ9Ik04Mi44MiAxNTUuOTMySDEyOHYtMzEuOTM3SDQ3LjkxN2wuNzY0IDguNTY4IDcuODUgODguMDFIMTI4di0zMS45MzdIODUuNzM5bC0yLjkxOS0zMi43MDR6TTkwLjAxOCAyMzYuNTQyaC0zMi4wNmw0LjQ3NCA1MC4xNDYgNjUuNDIxIDE4LjE2LjE0Ny0uMDRWMjcxLjU4bC0uMTQuMDM3LTM1LjU2OC05LjYwNC0yLjI3NC0yNS40NzF6IiBmaWxsPSIjRUJFQkVCIi8+PHBhdGggZD0iTTI0LjE4IDBoMTYuMjN2MTYuMDM1aDE0Ljg0N1YwaDE2LjIzMXY0OC41NThoLTE2LjIzdi0xNi4yNkg0MC40MTF2MTYuMjZoLTE2LjIzVjB6TTkyLjgzIDE2LjEwM0g3OC41NDRWMGg0NC44MTR2MTYuMTAzaC0xNC4yOTV2MzIuNDU1aC0xNi4yM1YxNi4xMDNoLS4wMDF6TTEzMC40NyAwaDE2LjkyM2wxMC40MSAxNy4wNjJMMTY4LjIwMyAwaDE2LjkzdjQ4LjU1OGgtMTYuMTY0VjI0LjQ5bC0xMS4xNjYgMTcuMjY1aC0uMjhMMTQ2LjM1IDI0LjQ5djI0LjA2OGgtMTUuODhWMHpNMTkzLjIxIDBoMTYuMjM1djMyLjUwOGgyMi44MjR2MTYuMDVoLTM5LjA2VjB6Ii8+PHBhdGggZD0iTTEyNy44OSAyMjAuNTczaDM5LjMyN2wtMy43MDggNDEuNDItMzUuNjIgOS42MTR2MzMuMjI2bDY1LjQ3My0xOC4xNDUuNDgtNS4zOTYgNy41MDYtODQuMDguNzc5LTguNTc2SDEyNy44OXYzMS45Mzd6TTEyNy44OSAxNTUuODU0di4wNzhoNzcuMTQzbC42NC03LjE3OCAxLjQ1Ni0xNi4xOTEuNzYzLTguNTY4SDEyNy44OXYzMS44NnoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=",
        Persentage: 90
    },
    {
        Title: "CSS",
        Image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjQiCiAgIGhlaWdodD0iNjQiCiAgIHZpZXdCb3g9IjAgMCA2NCA2NCIKICAgaWQ9InN2ZzM0NzYiCiAgIHZlcnNpb249IjEuMSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idzNfY3NzLWljb24uc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzQ3OCIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iNC44NzY2NjY3IgogICAgIGlua3NjYXBlOmN4PSIyNy4xNDI4NTciCiAgICAgaW5rc2NhcGU6Y3k9IjI4LjU3MTQyOSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE4NTAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNzAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI3IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgdW5pdHM9InB4IiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTM0ODEiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkNhbHF1ZSAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkzLjYzMywtNzM5LjQ4MDMxKSI+CiAgICA8cG9seWdvbgogICAgICAgc3R5bGU9ImZpbGw6IzI2NGRlNCIKICAgICAgIHBvaW50cz0iNDM3LjM2NywxMDAuNjIgNDA0LjMyMSw0NzAuODE5IDI1NS43NzgsNTEyIDEwNy42NDQsNDcwLjg3NyA3NC42MzMsMTAwLjYyICIKICAgICAgIGlkPSJwb2x5Z29uMjk4OSIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMTU1NTc0MDYsMCwwLDAuMTU1NTczOTIsMTg1LjgyMjA0LDcyMy44MjY0NikiIC8+CiAgICA8cG9seWdvbgogICAgICAgc3R5bGU9ImZpbGw6IzI5NjVmMSIKICAgICAgIHBvaW50cz0iMjU2LDQ4MC41MjMgMzc2LjAzLDQ0Ny4yNDYgNDA0LjI3LDEzMC44OTQgMjU2LDEzMC44OTQgIgogICAgICAgaWQ9InBvbHlnb24yOTkxIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4xNTU1NzQwNiwwLDAsMC4xNTU1NzM5MiwxODUuODIyMDQsNzIzLjgyNjQ2KSIgLz4KICAgIDxwb2x5Z29uCiAgICAgICBzdHlsZT0iZmlsbDojZWJlYmViIgogICAgICAgcG9pbnRzPSIyNTYsMjY4LjIxNyAxNTAuMzEsMjY4LjIxNyAxNTQuMzgsMzEzLjYyNyAyNTYsMzEzLjYyNyAiCiAgICAgICBpZD0icG9seWdvbjI5OTMiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjE1NTU3NDA2LDAsMCwwLjE1NTU3MzkyLDE4NS44MjIwNCw3MjMuODI2NDYpIiAvPgogICAgPHBvbHlnb24KICAgICAgIHN0eWxlPSJmaWxsOiNlYmViZWIiCiAgICAgICBwb2ludHM9IjI1NiwxNzYuMzA1IDI1NS44NDMsMTc2LjMwNSAxNDIuMTMyLDE3Ni4zMDUgMTQ2LjI2LDIyMS43MTYgMjU2LDIyMS43MTYgIgogICAgICAgaWQ9InBvbHlnb24yOTk1IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4xNTU1NzQwNiwwLDAsMC4xNTU1NzM5MiwxODUuODIyMDQsNzIzLjgyNjQ2KSIgLz4KICAgIDxwb2x5Z29uCiAgICAgICBzdHlsZT0iZmlsbDojZWJlYmViIgogICAgICAgcG9pbnRzPSIxNTYuNDA5LDMzNi4zMzMgMTYyLjc3MSw0MDcuNjM0IDI1NS43OTEsNDMzLjQ1NyAyNTYsNDMzLjM5OSAyNTYsMzg2LjE1MyAyNTUuODAxLDM4Ni4yMDYgMjA1LjIyNywzNzIuNTUgMjAxLjk5NCwzMzYuMzMzIDE3Ny40MTksMzM2LjMzMyAiCiAgICAgICBpZD0icG9seWdvbjI5OTciCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjE1NTU3NDA2LDAsMCwwLjE1NTU3MzkyLDE4NS44MjIwNCw3MjMuODI2NDYpIiAvPgogICAgPHBvbHlnb24KICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiCiAgICAgICBwb2ludHM9IjMxMS43NjEsMzEzLjYyNyAzMDYuNDksMzcyLjUyMSAyNTUuODQzLDM4Ni4xOTEgMjU1Ljg0Myw0MzMuNDM1IDM0OC45MzcsNDA3LjYzNCAzNDkuNjIsMzk5Ljk2MiAzNjAuMjkxLDI4MC40MTEgMzYxLjM5OSwyNjguMjE3IDM2OS41OTcsMTc2LjMwNSAyNTUuODQzLDE3Ni4zMDUgMjU1Ljg0MywyMjEuNzE2IDMxOS44MzEsMjIxLjcxNiAzMTUuNjk5LDI2OC4yMTcgMjU1Ljg0MywyNjguMjE3IDI1NS44NDMsMzEzLjYyNyAiCiAgICAgICBpZD0icG9seWdvbjMwMDUiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjE1NTU3NDA2LDAsMCwwLjE1NTU3MzkyLDE4NS44MjIwNCw3MjMuODI2NDYpIiAvPgogIDwvZz4KPC9zdmc+Cg==",
        Persentage: 70
    },]

    const containerVariants = {
        hidden: { scale: 0.8 }, // Swipe dari kanan
        visible: {
            scale: 1,// Elemen sepenuhnya terlihat
            transition: {
                duration: 1,
                ease: "easeInOut",
                staggerChildren: 0.2, // Animasi elemen anak satu per satu
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
    };

    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants} id="Skill" className="md:gap-y-5 flex flex-col mx-10 lg:mx-32 md:bg-gray-400 py-10 rounded-3xl md:bg-opacity-30">
                <motion.h1 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }} className="text-center text-white font-bold text-3xl md:text-5xl">Skill</motion.h1>
                <div className="grid md:grid-cols-2 gap-y-5 items-center">
                    {skil.map((item, index) => <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={itemVariants}
                    ><Card_Skill item={item}/>  </motion.div>)}
                </div>
            </motion.div>
        </>
    )
}