const linksSocialMedias = {
  github: 'joaogtins',
  youtube: 'rocketseat',
  instagram: 'joaogtins',
  facebook: 'rocketseat',
  twitter: 'joaogtins'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `http://api.github.com/users/${linksSocialMedias.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userPhoto.src = data.avatar_url
    })
}

getGitHubProfileInfos()
