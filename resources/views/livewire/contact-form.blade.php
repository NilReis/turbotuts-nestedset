<div>
    <form wire:submit.prevent="submit">
        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" wire:model="name" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" wire:model="email" class="form-control" id="email">
        </div>
        <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea wire:model="message" class="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
</div>
