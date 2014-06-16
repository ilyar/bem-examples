# accordion-menu

## bemjson

```javascript
{
    block: 'accordion-menu',
    items: [
        {
            title: 'My files',
            items: [
                {
                    title: 'Dropbox',
                    url: '#',
                    number: 42
                },
                {
                    title: 'Skydrive',
                    url: '#',
                    number: 87
                },
                {
                    title: 'FTP Server',
                    url: '#',
                    number: 366
                }
            ]
        },
        {
            title: 'Mail',
            current: true,
            items: [
                {
                    title: 'Hotmail',
                    url: '#',
                    number: 9
                },
                {
                    title: 'Yahoo',
                    url: '#',
                    number: '14'
                },
                {
                    title: 'Gmail',
                    url: '#',
                    number: 3
                }
            ]
        },
        {
            title: 'Cloud',
            disabled: true,
            items: [
                {
                    title: 'Connect',
                    url: '#',
                    number: 12
                },
                {
                    title: 'Profiles',
                    url: '#',
                    number: 19
                },
                {
                    title: 'Options',
                    url: '#',
                    number: 27
                }
            ]
        },
        {
            title: 'Sign Out',
            items: [
                {
                    title: 'Log Out',
                    url: '#'
                },
                {
                    title: 'Delete Account',
                    url: '#'
                },
                {
                    title: 'Freeze Account',
                    url: '#'
                }
            ]
        }
    ]
}
```