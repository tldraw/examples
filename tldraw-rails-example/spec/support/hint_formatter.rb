RSpec::Support.require_rspec_core "formatters/documentation_formatter"

class HintFormatter < RSpec::Core::Formatters::DocumentationFormatter
  RSpec::Core::Formatters.register self, :example_failed

  def example_failed(failure)
    super
    @output.puts "\n\nHint:  #{failure.example.metadata[:hint][0]}" if failure.example.metadata[:hint].present?
  end

end
