import { ICommand } from './command.interface.js';
import chalk from 'chalk';
export class HelpCommand implements ICommand {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.log(chalk.red(`
        Программа для подготовки данных для REST API сервера.)`),
    chalk.green(`
        Пример:
        cli.js --<command> [--arguments]`),
    chalk.cyan(`
        Команды:
            --version:                   # выводит номер версии
            --help:                      # печатает этот текст
            --import <path>:             # импортирует данные из TSV
            --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных
    `));
  }
}
