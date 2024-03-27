import sys
from pytube import Playlist, YouTube
import json
from datetime import datetime

def datetime_handler(x):
    if isinstance(x, datetime):
        return x.isoformat()
    raise TypeError("Unknown type")

def fetch_playlist_data(playlist_url):
    playlist = Playlist(playlist_url)
    videos_data = []

    # Verificando se a playlist está vazia
    if not playlist.video_urls:
        print("A playlist está vazia.")
        return {"playlist_info": {}, "videos_data": []}

    # Informações da playlist
    playlist_info = {
        'description': "Descrição não disponível",
        'thumbnail': "URL da miniatura não disponível",
        'publishedAt': "Data de publicação não disponível",
        'itemCount': len(playlist.video_urls)
    }

    for video_url in playlist.video_urls[:10]: # Limita a 10 vídeos para simplificar
        try:
            yt = YouTube(video_url)
            video_info = {
                'title': yt.title,
                'duration': yt.length,
                'id': yt.video_id,
                'thumbnail_url': yt.thumbnail_url,
                'publishedAt': yt.publish_date,
                # 'channel_id': yt.channel_id, # Este campo não é diretamente acessível com pytube
            }
            videos_data.append(video_info)
        except Exception as e:
            print(f"Erro ao processar o vídeo: {e}")

    # Combinando informações da playlist com informações dos vídeos
    combined_data = {
        'playlist_info': playlist_info,
        'videos_data': videos_data
    }

    return combined_data

if __name__ == "__main__":
    url = sys.argv[1] # Recebe a URL da playlist como argumento
    data = fetch_playlist_data(url)
    print(json.dumps(data, indent=4, default=datetime_handler)) # Imprime os dados como JSON com indentação para melhor visualização
