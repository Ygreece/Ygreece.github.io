---
title: "Linux 多线程文件传输服务器"
excerpt: "基于 C 语言实现的企业级文件传输服务器，覆盖 Linux 应用编程 90%+ 核心知识点，包含线程池、epoll、SSL/TLS、用户认证等。"
date: 2025-05-25
tags:
  - Linux
  - C语言
  - 网络编程
  - 多线程
  - 系统编程
links:
  - title: GitHub
    url: https://github.com/Ygreece/linux-file-server
---

*2025.05*

一个用于学习 Linux 应用编程的实战项目，从零构建一个完整的文件传输服务器。

<!--more-->

## 功能特性

- TCP 多线程服务器，线程池处理并发连接
- 文件上传/下载/删除/列表，自定义二进制协议
- epoll 高性能 I/O 多路复用
- 用户认证（SHA-256 + Salt）
- 断点续传、zlib 压缩传输
- SSL/TLS 加密（OpenSSL）
- 共享内存 IPC、多进程模型
- inotify 文件监控、SQLite 元数据存储
- 嵌入式 Web 管理界面
- 配置热加载、日志轮转、信号处理

## 覆盖知识点

文件 I/O、进程管理、信号处理、线程编程、网络编程、epoll、共享内存、OpenSSL、zlib、SQLite3、inotify、HTTP 协议、内存池设计、守护进程、Makefile 工程化

**技术栈：** C11、POSIX Threads、epoll、OpenSSL、zlib、SQLite3
