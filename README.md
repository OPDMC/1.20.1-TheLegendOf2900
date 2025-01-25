> [!IMPORTANT]
> 
> By using this project, you acknowledge and agree that the [Minecraft EULA](https://account.mojang.com/documents/minecraft_eula) is automatically set to TRUE.
> 
> This distribution is for personal use only and is intended for learning and communication purposes. It is strictly forbidden to use it for commercial purposes. The author of the integration pack has declared that all rights are reserved. Please respect the copyright of the original author. If there is any infringement, please contact us for deletion.
> 
> 使用本项目即表示您承认并同意 [Minecraft EULA](https://account.mojang.com/documents/minecraft_eula) 已自动设置为 TRUE。
> 
> 此分发仅出于自用，同时供学习交流使用，严禁用于商业用途。整合包作者已声明保留所有权利，请尊重原作者的版权，如有侵权请联系删除。

<div align="center">
	<img src="https://github.com/OPDMC/1.20.1-TheLegendOf2900/raw/main/docs/%23README/icon.jpg" width="20%"/>
    <h1>1.20.1-TheLegendOf2900 <code>v1.0</code></h1>
	<a href='https://github.com/OPDMC/1.20.1-TheLegendOf2900'><img src="https://img.shields.io/badge/-GitHub-3A3A3A?style=flat&amp;logo=GitHub&amp;logoColor=white" referrerpolicy="no-referrer" alt="GitHub"></a>
	<a href='https://github.com/OPDMC/1.20.1-TheLegendOf2900/pkgs/container/1.20.1-thelegendof2900'><img src="https://img.shields.io/badge/Ghcr.io-v1.0-555555?labelColor=8957E5&style=flat&amp;logo=GitHub&amp;logoColor=white" referrerpolicy="no-referrer" alt="Ghcr.io"></a>
	<a href='https://hub.docker.com/r/opdmc/1.20.1-thelegendof2900'><img src="https://img.shields.io/badge/DockerHub-v1.0-555555?labelColor=1c90ed&style=flat&amp;logo=Docker&amp;logoColor=white" referrerpolicy="no-referrer" alt="DockerHub"></a>

![Docker Image Size](https://img.shields.io/docker/image-size/opdmc/1.20.1-thelegendof2900?arch=amd64&label=AMD64&color=006688) ![Docker Image Size](https://img.shields.io/docker/image-size/opdmc/1.20.1-thelegendof2900?arch=arm64&label=ARM64&color=008866)
    </tr>
</div>


## 1 Description

这是OPDMC群友自用的Docker化MC整合包服务器。其目的是为了便于部署。整合包作者在下方的 `3 Reference` 中注明了，此分发仅出于自用，同时供学习交流使用，严禁用于商业用途。整合包作者已声明保留所有权利，请尊重原作者的版权，如有侵权请联系删除。

This is a Dockerized MC integration pack server for OPDMC group members. The purpose is to facilitate deployment. The author of the integration pack has declared that all rights are reserved. Please respect the copyright of the original author. If there is any infringement, please contact us for deletion.

### 1.1 Update Rule

版本号用 `vA.B` 表示 (eg: `v1.0`, `v1.1`, `v2.0`)，其中 `A` 的改变表示用 `-v /path/to/store/data:/minecraft` 挂载的持久性文件中需要手动做出一些改变。而 `B` 表示小版本更新，理论上 `v1.0` 可以直接升级到 `v1.1` 因为它们的大版本是相同的。

Version numbers are represented as `vA.B` (eg: `v1.0`, `v1.1`, `v2.0`), where changes to `A` indicate that some manual modifications are required in the persistent files mounted with `-v /path/to/store/data:/minecraft`. On the other hand, `B` represents minor version updates; theoretically, `v1.0` can be directly upgraded to `v1.1` because they share the same major version.

## 2 Usage

```shell
# DockerHub
docker pull opdmc/1.20.1-thelegendof2900:latest
# Ghcr.io
docker pull ghcr.io/opdmc/1.20.1-thelegendof2900:latest
```

```shell
docker run -it \
  --name=1.20.1-thelegendof2900 \
  -p 127.0.0.1:8080:25565/tcp \
  -v /path/to/store/data:/minecraft \
  opdmc/1.20.1-thelegendof2900
```

| Parameter                           | Function                                                               |                                         |
|-------------------------------------|------------------------------------------------------------------------|-----------------------------------------|
| `-p 127.0.0.1:80:25565/tcp`         | Minecraft server port                                                  | MC服务器端口                                 |
| `-v /path/to/store/data:/minecraft` | To store data in local, auto initialize if `docker-start.sh` NOT exist | 服务器文件映射路径, `docker-start.sh` 不存在时将进行初始化 |

## 3 Reference

- **The Legend Of 2900**
  - https://www.curseforge.com/minecraft/modpacks/the-legend-of-2900
  - https://www.mcmod.cn/modpack/967.html

## 4 License

By using this project, you agree to the Minecraft End User License Agreement (EULA). The EULA can be found at the following link: [Minecraft EULA](https://account.mojang.com/documents/minecraft_eula).  This project automatically sets the EULA to true in the Minecraft configuration. By continuing to use this project, you acknowledge that you have read, understood, and agreed to the terms of the Minecraft EULA.

This distribution is for personal use only and is intended for learning and communication purposes. It is strictly forbidden to use it for commercial purposes. The author of the integration pack has declared that all rights are reserved. Please respect the copyright of the original author. If there is any infringement, please contact us for deletion.

使用本项目即表示您同意《Minecraft 最终用户许可协议》（EULA）。EULA 可通过以下链接查看：[Minecraft EULA](https://account.mojang.com/documents/minecraft_eula)。 本项目会自动在 Minecraft 配置中将 EULA 设置为 true。继续使用本项目即表示您已阅读、理解并同意 Minecraft EULA 的条款。

此分发仅出于自用，同时供学习交流使用，严禁用于商业用途。整合包作者已声明保留所有权利，请尊重原作者的版权，如有侵权请联系删除。

Apache License 2.0
